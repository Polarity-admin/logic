import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize, tap } from 'rxjs/operators';
import { fakeAuth } from './routes/auth.fake';
import { fakeUsers } from './routes/users.fake';
import { fakeComboBox } from './routes/common/combobox.fake';
import { environment } from 'src/environments/environment';
import { fakeCustomer } from './routes/common/customer.fake';
import { env } from 'process';

interface ApiHandlerDefinition {
    path: string;
    handler: (request: HttpRequest<any>, apiPath?: string) => Observable<HttpEvent<any>>;
}

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    constructor(private http: HttpClient) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // wrap in delayed observable to simulate server api call
        return of({})
            .pipe(mergeMap(handleRoute))
            .pipe(tap(requestLogger))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function requestLogger(res: any): void {
            if (environment.debugOptions?.logFakeApiRequests !== true) return;

            // For Checking APIs / Unit Testing
            const { host, pathname } = new URL(request.url);
            let normalizedPath = request.url;
            if (environment.apiBaseUrl.includes(host)) {
                if (pathname.startsWith('/assets/i18n')) {
                    normalizedPath = `(i18n)${pathname}`;
                } else {
                    normalizedPath = `(api)${pathname}`;
                }
            }
            console.log(`[REQ] ${normalizedPath}`, request);
            console.log(`[RES] ${normalizedPath}`, res);
        }

        function handleRoute(): Observable<HttpEvent<any>> {
            if (request.url.startsWith(environment.apiBaseUrl)) {
                const { pathname } = new URL(request.url);
                const handlerList = getApiRouteHandlers();

                if (pathname.startsWith('/assets/i18n')) {
                    // Internationalization
                    // Rewrite target address
                    const { origin } = new URL(window.location.href);
                    const rewritten = new HttpRequest('GET', origin + pathname);
                    return next.handle(rewritten);
                } else if (pathname.startsWith(environment.apiPrefix)) {
                    // API
                    const apiPath = pathname.substring(environment.apiPrefix.length);
                    for (let i = 0; i < handlerList.length; i++) {
                        if (apiPath.startsWith(handlerList[i].path)) {
                            return handlerList[i].handler(request, apiPath);
                        }
                    }
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }

        function getApiRouteHandlers(): ApiHandlerDefinition[] {
            return [
                { path: '/auth', handler: fakeAuth },
                { path: '/users', handler: fakeUsers },
                { path: '/common/client', handler: fakeCustomer },
                { path: '/common/combobox', handler: fakeComboBox },
            ];
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};


