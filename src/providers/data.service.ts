import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(tap(data => data));
    }

    getMenuOptions(): Observable<Componente[]> {
        return this.http.get('/assets/data/menu.json').pipe(tap((data: Componente[]) => data));
    }

    getAlbums(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/albums').pipe(tap((data: any) => data));
    }

    getHeroes(): Observable<any[]> {
        return this.http
            .get('/assets/data/superheroes.json')
            .pipe(tap((data: any[]) => data))
            .pipe(delay(2000));
    }
}
