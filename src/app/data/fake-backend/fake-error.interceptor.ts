import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { error } from './fake.function';

// API単位でHTTPエラーとなる場合
// api：正規表現
// metod：GET、PUT、POST、DELETE、空白（全てのHTTPメソッド）
// status：HTTPのステータスコード
const errorApis = [
    // {
    //     api: /\/api\/FlexData\/GetFlexDataItems+/i,
    //     method: 'GET',
    //     status: 404
    // },
    // with path id parameter
    // {
    //     api: /\/api\/dateitem\/(.+)+/i,
    //     method: 'GET',
    //     status: 404
    // },
    // all http method
    // {
    //     api: /\/api\/dateitem+/i,
    //     method: '',
    //     status: 404
    // }
];

@Injectable()
export class FakeErrorBackendInterceptor implements HttpInterceptor {
    constructor() { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return of({})
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute(): Observable<HttpEvent<any>> {

            const errorApi = errorApis.find(i => {
                return url.match(i.api)
                    && (!i.method || i.method && method.toLocaleLowerCase() === i.method.toLocaleLowerCase());
            });
            if (errorApi) {
                return error(request, errorApi.status);
            } else {
                return next.handle(request);
            }
        }
    }
}


export const fakeErrorBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeErrorBackendInterceptor,
    multi: true
};


