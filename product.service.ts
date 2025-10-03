import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // أو لينك API بتاعك

    constructor(private http: HttpClient) { }

    getPosts(): Observable<any> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
