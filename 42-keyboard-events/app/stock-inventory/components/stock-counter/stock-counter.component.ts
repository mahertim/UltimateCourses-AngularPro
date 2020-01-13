import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true,
};

@Component({
  selector: 'stock-counter',
  providers: [COUNTER_CONTROL_ACCESSOR],
  styleUrls: ['./stock-counter.component.scss'],
  templateUrl: './stock-counter.component.html',
})
export class StockCounterComponent implements ControlValueAccessor {
  private onTouch: Function = () => {};
  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  private onModelChange: Function = () => {};
  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10;
  writeValue(value: number) {
    this.value = value || 0;
  }

  focus: boolean = false;

  onKeyDown(event: KeyboardEvent) {
    const handlers = (eventCode: string) => {
      switch (eventCode) {
        case 'ArrowDown':
          this.decrement();
          return true;

        case 'ArrowUp':
          this.increment();
          return true;

        default:
          return false;
      }
    };

    if (handlers(event.code)) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }

  /**
   * Another way to implement multiple handlers
   */
  /*
  altOnKeyDown(event: KeyboardEvent) {
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment(),
    };

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }
  */

  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  increment() {
    if (this.value <= this.max - this.step) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  decrement() {
    if (this.value >= this.min + this.step) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
}
