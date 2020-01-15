import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { of, Observable } from 'rxjs';

import { StockInventoryService } from './stock-inventory.service';
import { Item, Product } from '../models/product.interface';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// product
function createResponse(body: any[]): Observable<{ json(): any }> {
  return of({
    json: () => {
      return body;
    },
  });
}

class MockHttpClient {
  get() {
    return createResponse([]);
  }
}

const cartItems: Item[] = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 5 },
];

const products: Product[] = [
  { id: 1, price: 10, name: 'Test' },
  { id: 2, price: 100, name: 'Another Test' },
  { id: 3, price: 50, name: 'A Third Test' },
];

describe('StockInventoryService', () => {
  let service: StockInventoryService;
  let httpClient: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        StockInventoryService,
        { provide: HttpClient, useClass: MockHttpClient },
      ],
    });

    httpClient = bed.get(HttpClient);
    service = bed.get(StockInventoryService);
  });

  it('should get the cart items', () => {
    spyOn(httpClient, 'get').and.returnValue(createResponse([...cartItems]));
    service.getCartItems().subscribe((result) => {
      expect(result.length).toBe(2);
      expect(result).toEqual(cartItems);
    });
  });

  it('should get the products', () => {
    spyOn(httpClient, 'get').and.returnValue(createResponse([...products]));
    service.getProducts().subscribe((result) => {
      expect(result.length).toBe(3);
      expect(result).toEqual(products);
    });
  });
});
