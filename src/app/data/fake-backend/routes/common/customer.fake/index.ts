import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { Customer } from '../../../../schema/search/customer';
import { errorMissingFake, ok } from '../../../fake.function';
import customerList from './customer.json';

export function fakeCustomer(request: HttpRequest<any>): Observable<HttpEvent<any>> {
  const { url, method } = request;

  switch (true) {
    case url.endsWith('search') && method === 'GET':
      return getCustomer();
    default:
      return errorMissingFake(request);
  }
}

function getCustomer(): Observable<HttpEvent<Customer[]>> {
  return ok(customerList as Customer[]);
}