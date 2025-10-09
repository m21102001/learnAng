import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private _httpClient: HttpClient) { }

    getProducts(): Observable<any> {
        return this._httpClient.get(`https://fakestoreapi.com/products`)
    }
    getProduct(id: string): Observable<any> {
        return this._httpClient.get(`https://fakestoreapi.com/products/${id}`)
    }
}
