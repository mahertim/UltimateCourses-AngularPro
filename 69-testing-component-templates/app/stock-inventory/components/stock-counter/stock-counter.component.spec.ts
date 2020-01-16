import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { StockCounterComponent } from './stock-counter.component';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

describe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Template Tests', () => {
    it('should increment when the plus button is clicked', () => {
      el.query(By.css('button.plus')).triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.value).toBe(1);
      expect(el.query(By.css('p')).nativeElement.textContent).toBe('1');
    });

    it('should decrement when the - button is clicked', () => {
      component.value = 1;
      fixture.detectChanges();
      expect(component.value).toBe(1);
      el.query(By.css('button.minus')).triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.value).toBe(0);
      expect(el.query(By.css('p')).nativeElement.textContent).toBe('0');
    });

    it('should increment the value when the up arrow is pressed', () => {
      const event = new Event('KeyboardEvent') as any;
      event.code = 'ArrowUp';
      el.query(By.css('.stock-counter > div > div')).triggerEventHandler(
        'keydown',
        event,
      );
      fixture.detectChanges();
      expect(component.value).toBe(1);
      expect(el.query(By.css('p')).nativeElement.textContent).toBe('1');
    });

    it('should increment the value when the up arrow is pressed', () => {
      component.value = 1;
      fixture.detectChanges();
      expect(component.value).toBe(1);
      const event = new Event('KeyboardEvent') as any;
      event.code = 'ArrowDown';
      el.query(By.css('.stock-counter > div > div')).triggerEventHandler(
        'keydown',
        event,
      );
      fixture.detectChanges();
      expect(component.value).toBe(0);
      expect(el.query(By.css('p')).nativeElement.textContent).toBe('0');
    });
  });

  describe('Method Tests', () => {
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
  });

  describe('Input/Output Tests', () => {
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

    it('should not increment above custom maximum value using a custom step', () => {
      component.step = 20;
      component.max = 20;
      component.increment();
      expect(component.value).toBe(20);
      component.increment();
      expect(component.value).toBe(20);
    });

    it('should call the output on a value change', () => {
      spyOn(component.changed, 'emit').and.callThrough();
      component.step = 100;
      component.increment();
      expect(component.changed.emit).toHaveBeenCalledWith(100);
    });
  });
});
