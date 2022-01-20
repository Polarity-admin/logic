import { HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/data/schema/user';
import { errorMissingFake, idFromUrl, ok } from '../../fake.function';
import userList from './users.json';

export function fakeUsers(request: HttpRequest<any>, apiPath: string): Observable<HttpEvent<any>> {
    const { url, method, headers, body, params } = request;

    if(apiPath.includes('/search') && method === 'GET') {
        return getUsers(new URL(url).searchParams);
    } else if (apiPath.match(/\/users\/(.+)+/i) && method === 'GET') {
        return getById(url);
    } else {
        return errorMissingFake(request);
    }
}
  
function getUsers(params: URLSearchParams): Observable<HttpEvent<any>> {
    const userName = params.get('userName');
    const mail = params.get('mail');
    const sectionName = params.get('sectionName');
    const company = params.get('companyCode');

    const users = (userList as User[]).filter(user => {
        let bool = true;
        
        if(mail !== '' && user.email !== mail) bool = false;
        else if(sectionName !== '' && user.section !== sectionName) bool = false;
        else if(userName !== '' && user.username !== userName) bool = false;
        else if(company !== user.company) bool = false;

        return bool;
    });

    return ok(users);
}
  
function getById(url): Observable<HttpEvent<any>> {
    const id = idFromUrl(url);
    const user = (userList as User[]).find(u => u.loginId === id);
    if (user) {
        return ok(user);
    } else {
        return ok();
    }
}