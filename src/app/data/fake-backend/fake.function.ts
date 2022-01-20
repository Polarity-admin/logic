import { HttpErrorResponse, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

// helper functions
export function ok(body?): Observable<HttpEvent<any>> {
    return of(new HttpResponse({ status: 200, body }));
}

export function error(request: HttpRequest<any>, status: number): Observable<HttpEvent<any>> {
    const errorResponse = new HttpErrorResponse({
        error: {
            error: status,
            message: `fake ${status} error by interceptor`
        },
        headers: request.headers,
        status,
        statusText: `fake ${status} error by interceptor`,
        url: request.url
    });
    return throwError(errorResponse);
}

export function errorMissingFake(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    const errorResponse = new HttpErrorResponse({
        error: {
            error: 404,
            message: `missng fake error by interceptor`
        },
        headers: request.headers,
        status: 404,
        statusText: `missng fake error by interceptor`,
        url: request.url
    });
    return throwError(errorResponse);
}

export function idFromUrl(url): string {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
}
