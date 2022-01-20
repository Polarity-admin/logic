import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalBroadcastService, MsalGuardConfiguration, MsalService, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { NgxPermissionsService } from 'ngx-permissions';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/data/service/users.service';
import { environment } from 'src/environments/environment';
@Component({
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.less'],
    selector: 'app-top-bar'
})
export class TopBarComponent implements OnInit, AfterViewInit, OnDestroy {

    loginDisplay: boolean;

    // languages: string[];
    // currentLang: string;

    loginId: string;
    globalId: string;
    userName: string;
    env: string;

    private readonly destroying$ = new Subject<void>();

    constructor(
        @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
        private authService: MsalService,
        private msalBroadcastService: MsalBroadcastService,
        private usersService: UsersService,
        private sqrmAuthService: AuthService,
        private router: Router,
        private permissionsService: NgxPermissionsService,
        private http: HttpClient // AADがOFFにする場合、AppConstsから情報を取得する用（暫定）
    ) {

        if (environment.isUseAAD) {
            /**
             * You can subscribe to MSAL events as shown below. For more info,
             * visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/events.md
             */
            this.msalBroadcastService.inProgress$
                .pipe(
                    filter((status: InteractionStatus) => status === InteractionStatus.None),
                    takeUntil(this.destroying$)
                )
                .subscribe(() => {
                    this.setLoginDisplay();
                    const claims = this.authService.instance.getActiveAccount()?.idTokenClaims as any;
                    if (claims) {
                        this.loginId = claims.preferred_username;
                        this.userName = claims.name;
                    }
                    if (this.loginId) {
                        this.sqrmAuthService.login(this.loginId);
                    }
                });
        }

        this.sqrmAuthService.user$.subscribe((loginUser) => {
            if (loginUser) {
                this.usersService.getUser(loginUser.loginId).subscribe(u => {
                    if (!environment.isUseAAD) {
                        this.userName = u.username;
                    }
                    this.globalId = u.globalId;
                    // this.userName = u.username;
                    // $.AdminBSB.activateAll();
                });
            }

        });
    }



    ngOnInit(): void {

        // this.languages = this.translate.getLangs();
        // this.currentLang = this.translate.currentLang;

        this.env = environment.env;
    }

    ngAfterViewInit(): void {

    }

    setLoginDisplay(): void {
        this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    }

    login(): void {
        // AADがONの場合
        if (environment.isUseAAD) {
            if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
                if (this.msalGuardConfig.authRequest) {
                    this.authService.loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
                        .subscribe((response: AuthenticationResult) => {
                            this.authService.instance.setActiveAccount(response.account);
                        });
                } else {
                    this.authService.loginPopup()
                        .subscribe((response: AuthenticationResult) => {
                            this.authService.instance.setActiveAccount(response.account);
                        });
                }
            } else {
                if (this.msalGuardConfig.authRequest) {
                    this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);
                } else {
                    this.authService.loginRedirect();
                }
            }
        } else {
            // AADがOFFの場合
            this.loginDisplay = true;
            // AppConstsからログインユーザー情報を取得（暫定）
            this.http.get<any>('/assets/config/AppConsts.json').subscribe((appconsts) => {
                if (appconsts.loginId) {
                    this.sqrmAuthService.login(appconsts.loginId);
                    this.router.navigate(['/', 'index']);
                }
            });
        }
    }

    logout(): void {
        this.permissionsService.flushPermissions();
        if (environment.isUseAAD) {
            this.authService.logout().subscribe(() => {
                this.router.navigateByUrl('/');
            });
        } else {
            this.loginDisplay = false;
            this.router.navigateByUrl('/');
        }
    }

    // unsubscribe to events when component is destroyed
    ngOnDestroy(): void {
        this.destroying$.next(undefined);
        this.destroying$.complete();
    }
}
