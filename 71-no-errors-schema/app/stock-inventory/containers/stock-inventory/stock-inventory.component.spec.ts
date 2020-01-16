import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Observable, of } from 'rxjs';

import { StockInventoryComponent } from './stock-inventory.component';
import { StockInventoryService } from '../../services/stock-inventory.service';

import { Item, Product } from '../../models/product.interface';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

class MockStockInventoryService {
  getProducts(): Observable<Product[]> {
    return of([
      { id: 1, price: 10, name: 'test' },
      { id: 2, price: 100, name: 'another test' },
    ]);
  }

  getCartItems(): Observable<Item[]> {
    return of([
      { product_id: 1, quantity: 10 },
      { product_id: 2, quantity: 5 },
    ]);
  }
}

describe('StockInventoryComponent', () => {
  let component: StockInventoryComponent;
  let fixture: ComponentFixture<StockInventoryComponent>;
  let el: DebugElement;
  let service: StockInventoryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [StockInventoryComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: StockInventoryService, useClass: MockStockInventoryService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInventoryComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    service = el.injector.get(StockInventoryService);
  });

  it('should get the cart items and products on init', () => {
    spyOn(service, 'getProducts').and.callThrough();
    spyOn(service, 'getCartItems').and.callThrough();
    component.ngOnInit();
    expect(service.getProducts).toHaveBeenCalled();
    expect(service.getCartItems).toHaveBeenCalled();
  });

  it('should create a product map from the service response', () => {
    component.ngOnInit();
    expect(component.productsMap.get(1)).toEqual({
      id: 1,
      price: 10,
      name: 'test',
    });
    expect(component.productsMap.get(2)).toEqual({
      id: 2,
      price: 100,
      name: 'another test',
    });
  });

  it('should store the products response', () => {
    component.ngOnInit();
    expect(component.products).toEqual([
      { id: 1, price: 10, name: 'test' },
      { id: 2, price: 100, name: 'another test' },
    ]);
  });

  it('should create a stock item for each cart item', () => {
    spyOn(component, 'addStock');
    component.ngOnInit();
    expect(component.addStock).toHaveBeenCalledWith({
      product_id: 1,
      quantity: 10,
    });
    expect(component.addStock).toHaveBeenCalledWith({
      product_id: 2,
      quantity: 5,
    });
  });
});
