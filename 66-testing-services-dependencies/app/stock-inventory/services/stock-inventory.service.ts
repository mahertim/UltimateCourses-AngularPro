import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product, Item } from '../models/product.interface';

@Injectable()
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http.get('/api/cart').pipe(
      map((response: { json(): Item[] }) => response.json()),
      catchError((err: any) => throwError(err.json())),
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/api/products').pipe(
      map((response: { json(): Product[] }) => response.json()),
      catchError((err: any) => throwError(err.json())),
    );
  }
}
