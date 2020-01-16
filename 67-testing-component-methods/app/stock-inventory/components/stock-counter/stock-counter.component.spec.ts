import { TestBed, ComponentFixture } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { StockCounterComponent } from './stock-counter.component';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

describe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent],
    });

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
  });

  it('should increment correctly', () => {
    component.value = 0;
    component.increment();
    expect(component.value).toBe(1);
  });

  it('should decrement correctly', () => {
    component.value = 1;
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not decrement below default minimum value', () => {
    component.value = 100;
    for (let i = 0; i < 200; i++) {
      component.decrement();
    }
    expect(component.value).toBe(0);
  });

  it('should not increment above default maximum value', () => {
    component.value = 0;
    for (let i = 0; i < 200; i++) {
      component.increment();
    }
    expect(component.value).toBe(100);
  });

  it('should not decrement below custom minimum value', () => {
    component.min = 10;
    component.value = 100;
    for (let i = 0; i < 200; i++) {
      component.decrement();
    }
    expect(component.value).toBe(10);
  });

  it('should not increment above custom maximum value', () => {
    component.max = 50;
    component.value = 0;
    for (let i = 0; i < 200; i++) {
      component.increment();
    }
    expect(component.value).toBe(50);
  });
});
