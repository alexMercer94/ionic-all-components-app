import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(tap(data => data));
    }
}
