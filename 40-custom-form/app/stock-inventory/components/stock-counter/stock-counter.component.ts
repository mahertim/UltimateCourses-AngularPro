import { Component, Input } from '@angular/core';

@Component({
  selector: 'stock-counter',
  styleUrls: ['./stock-counter.component.scss'],
  templateUrl: './stock-counter.component.html',
})
export class StockCounterComponent {
  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 1000;

  value: number = 10;

  increment() {
    if (this.value <= this.max - this.step) this.value = this.value + this.step;
  }

  decrement() {
    if (this.value >= this.min + this.step) this.value = this.value - this.step;
  }
}
