import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NgxPermissionsService } from 'ngx-permissions';
import { LoginUser } from 'src/app/data/schema/login-user';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private readonly apiUrl = `${environment.apiBaseUrl}${environment.apiPrefix}/auth`;
  private loginUser: LoginUser;
  private timer: Subscription;
  private user = new BehaviorSubject<LoginUser>(null);
  user$: Observable<LoginUser> = this.user.asObservable();

  constructor(private router: Router, private http: HttpClient, private permissionsService: NgxPermissionsService) {
  }

  ngOnDestroy(): void {
  }

  login(loginId: string): void {
    this.permissionsService.addPermission(['admin']);
    this.http
      .post<string>(`${this.apiUrl}/token`, { loginId }, { responseType: 'text' as 'json' }).subscribe(accessToken => {

        const jwtTokenHeader = JSON.parse(atob(accessToken.split('.')[0]));

        const jwtTokenPayload = JSON.parse(atob(accessToken.split('.')[1]));

        const roles = jwtTokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']?.split(',');
        this.loginUser = {
          loginId,
          role: roles
        };

        this.permissionsService.flushPermissions();
        this.permissionsService.addPermission(roles);
        this.user.next(this.loginUser);
        this.setLocalStorage(accessToken);
        this.startTokenTimer();
      });
  }

  logout(): void {
    this.clearLocalStorage();
    this.user.next(null);
    this.stopTokenTimer();
    this.router.navigate(['/']);
  }

  refreshToken(): void {
    if (!this.loginUser) {
      this.clearLocalStorage();
      return;
    }

    this.http
      .post<string>(`${this.apiUrl}/token`, { loginId: this.loginUser.loginId }, { responseType: 'text' as 'json' })
      .subscribe(accessToken => {
        const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
        const roles = jwtToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']?.split(',');
        this.loginUser = {
          loginId: this.loginUser.loginId,
          role: roles
        };

        this.permissionsService.flushPermissions();
        this.permissionsService.addPermission(roles);
        this.user.next(this.loginUser);
        this.setLocalStorage(accessToken);
        this.startTokenTimer();
      });
  }

  setLocalStorage(accessToken: string): void {
    localStorage.setItem('access_token', accessToken);
  }

  clearLocalStorage(): void {
    localStorage.removeItem('access_token');
  }

  private getTokenRemainingTime(): number {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return 0;
    }
    const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    return expires.getTime() - Date.now();
  }

  private startTokenTimer(): void {
    const timeout = this.getTokenRemainingTime();
    this.timer = of(true)
      .pipe(
        delay(timeout),
        tap(() => this.refreshToken())
      )
      .subscribe();
  }

  private stopTokenTimer(): void {
    this.timer?.unsubscribe();
  }
}
