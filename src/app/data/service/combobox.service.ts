import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SqrmService } from 'src/app/core/services/sqrm.service';
import { ComboBoxOptionListResponse } from '../schema/api/common/combobox/combo-box-option-list-response';

@Injectable({
    providedIn: 'root'
})
export class ComboBoxService {

    private apiUrl = `${environment.apiBaseUrl}${environment.apiPrefix}/common/combobox`;

    constructor(
        private sqrmService: SqrmService,
    ) { }

    getOptionList(screenId: string): Observable<ComboBoxOptionListResponse> {
        return this.sqrmService.get<ComboBoxOptionListResponse>(`${this.apiUrl}/${screenId}`);
    }
}