import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComboBoxOptionListResponse } from 'src/app/data/schema/api/common/combobox/combo-box-option-list-response';
import { errorMissingFake, ok } from '../../../fake.function';
import comboboxOptions from './combobox.json';

export function fakeComboBox(request: HttpRequest<any>, apiPath: string): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    console.log('fakeComboBox -- enter 1');

    if (method === 'GET') {
        console.log('fakeComboBox -- enter 2');
        const regex = /\/common\/combobox\/(.*)/i;
        const screenIdGroups = apiPath.match(regex);
        console.log('screenIdGroups:', screenIdGroups);
        if(screenIdGroups) {
            return getComboBoxForScreen(screenIdGroups[1]);
        }
    }
    return errorMissingFake(request);
}

function getComboBoxForScreen(screenId: number | string): Observable<HttpEvent<any>> {
    const result: ComboBoxOptionListResponse = { combobox: [ ...comboboxOptions[screenId.toString()] ]};
    console.log('result:', result);
    return ok(result);
}