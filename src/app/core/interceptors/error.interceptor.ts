import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { AppConsts } from '../constants/appconsts';

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router, private translate: TranslateService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let handled = false;

        return next.handle(request)
            .pipe(
                catchError((returnedError) => {
                    let errorMessage = null;

                    if (returnedError.error instanceof ErrorEvent) {
                        errorMessage = `Error: ${returnedError.error?.message}`;
                    } else if (returnedError instanceof HttpErrorResponse) {
                        errorMessage = `Error Status ${returnedError.status}: ${returnedError.error?.error} - ${returnedError.error?.message}`;
                        handled = this.handleServerSideError(returnedError);
                    }

                    console.error(returnedError);

                    if (!handled) {
                        if (errorMessage) {
                            return throwError(errorMessage);
                        } else {
                            return throwError('Unexpected problem occurred');
                        }
                    } else {
                        return of(returnedError);
                    }
                })
            );
    }

    private handleServerSideError(error: HttpErrorResponse): boolean {
        let handled = false;
        switch (error.status) {
            case 0:
                handled = true;
                break;
            case 400:
                handled = true;
                break;
            case 401:
                handled = true;
                break;
            case 403:
                handled = true;
                break;
            case 404:
                handled = true;
                break;
            case 500:
                handled = true;
                break;

        }

        if (handled) {

            if (error.url.startsWith(`${environment.apiBaseUrl}/assets/i18n`)) {
                Swal.fire('', AppConsts.LanguageError, 'error');
            } else {

            }
            this.translate.get(`sqrm.${error.status}`).subscribe((message) => {

                Swal.fire('', message, 'error');
            }, (err) => {
                Swal.fire('', AppConsts.LanguageError, 'error');

            });
        }

        return handled;
    }
}
