import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SqrmService } from 'src/app/core/services/sqrm.service';
import { environment } from 'src/environments/environment';
import { Customer } from '../schema/search/customer';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

  private apiUrl = `${environment.apiBaseUrl}${environment.apiPrefix}/common/client`;

  constructor(private sqrmService: SqrmService) { }

  getCustomers(): Observable<Customer[]> {
    return this.sqrmService.get<Customer[]>(`${this.apiUrl}/search`);
  }
}