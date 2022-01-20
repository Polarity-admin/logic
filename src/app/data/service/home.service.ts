import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fakeHome } from 'src/app/data/fake-backend/routes/home.fake';
import { HomeTableInfo } from '../schema/home';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    constructor() { }

    getTableContent(): Observable<HomeTableInfo[]> {
        return of(fakeHome());
    }
}
