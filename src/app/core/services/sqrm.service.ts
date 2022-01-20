import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { SqrmError } from '../../data/schema/sqrm-error';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from './dialog.service';

@Injectable({
    providedIn: 'root'
})
export class SqrmService {

    constructor(
        private http: HttpClient,
        private translate: TranslateService,
        private dialog: DialogService,
    ) { }

    extractResponse<T>(res: any): Observable<T> {
        if (res) {
            if (this.isSqrmError(res)) {
                const error = res as SqrmError;
                if (error.status === 0) {
                    // 業務チェック結果がOKの場合
                    if (error.resultMsg) {
                        this.dialog.info(error.resultMsg);
                    } else if (error.resultCode) {
                        this.dialog.info(`sqrm.${error.resultCode}`, error.resultParamters);
                    }
                    return of<T>(null);
                } else if (error.status === 1) {
                    // 業務チェック結果がNGの場合
                    if (error.resultMsg) {
                        this.dialog.error(error.resultMsg);
                    } else if (error.resultCode) {
                        this.dialog.error(`sqrm.${error.resultCode}`, error.resultParamters);
                    }
                    return of<T>(null);
                } else {
                    return of<T>(null);
                }
            } else {
                return of<T>(res as T);
            }
        } else {
            return of<T>(null);
        }
    }

    isSqrmError(object: any): object is SqrmError {
        return object
            && typeof object === 'object'
            && 'timestamp' in object
            && 'status' in object
            && 'path' in object;
    }

    get<T>(url: string, params?: any): Observable<T> {
        return this.http.get<any>(url, { params }).pipe(mergeMap((res: any) => {
            return this.extractResponse<T>(res);
        }));
    }

    download<T>(url: string, params?: any): Observable<HttpResponse<T>> {
        return this.http.get<T>(url, { params, observe: 'response' });
    }

    postDownload<T>(url: string, data?: any): Observable<HttpResponse<T>> {
        return this.http.post<T>(url, data, { observe: 'response' });
    }

    post<T>(url: string, data: any, options?: any): Observable<T> {
        return this.http.post<any>(url, data, options).pipe(mergeMap((res: any) => {
            return this.extractResponse<T>(res);
        }));
    }

    put<T>(url: string, data: any): Observable<T> {
        return this.http.put<any>(url, data).pipe(mergeMap((res: any) => {
            return this.extractResponse<T>(res);
        }));
    }

    delete<T>(url: string, params?: any): Observable<T> {
        return this.http.delete<any>(url, { params }).pipe(mergeMap((res: any) => {
            return this.extractResponse<T>(res);
        }));
    }
}
