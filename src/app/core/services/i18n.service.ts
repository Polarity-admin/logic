import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { fileList } from '../i18n-config';
import merge from 'deepmerge';

@Injectable({
    providedIn: 'root'
})
export class TranslationService implements TranslateLoader {

    constructor(private http: HttpClient) { }

    getTranslation(lang: string): Observable<any> {
        const requests = fileList.map(resource => {
            const path = `${environment.apiBaseUrl}/assets/i18n/${lang}/${resource}.json`;
            return this.http.get<any>(path);
        });

        return forkJoin(requests).pipe(map(response => merge.all(response)));
    }
}
