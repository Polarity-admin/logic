import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { errorMissingFake, ok } from '../fake.function';

export function fakeAuth(request: HttpRequest<any>, apiPath: string): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    if (apiPath.startsWith('/auth/token') && method === 'POST') {
        return getToken(url);
    } else {
        return errorMissingFake(request);
    }
}

function getToken(url): Observable<HttpEvent<any>> {
    return ok('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsIm5iZiI6MTYzNDcyMzU0NCwiZXhwIjoxNjM0NzIzODQ0LCJpYXQiOjE2MzQ3MjM1NDQsImlzcyI6Imh0dHBzOi8vc2NrLWRlbW8tYXBpLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9zY2stZGVtby1hcGkuYXp1cmV3ZWJzaXRlcy5uZXQifQ.PtadTRl98EHfl3TpMAYfEVHbfDY8TiOfbtcYGjFK6z0');
}