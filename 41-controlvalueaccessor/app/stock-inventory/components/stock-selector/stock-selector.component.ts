import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product, Item } from '../../models/product.interface';

type BetterFormGroup = FormGroup | null;

@Component({
  selector: 'stock-selector',
  styleUrls: ['./stock-selector.component.scss'],
  templateUrl: './stock-selector.component.html',
})
export class StockSelectorComponent {
  @Input()
  parent: BetterFormGroup = null;

  @Input()
  products: Product[] = [];

  @Output()
  added: EventEmitter<Item> = new EventEmitter<Item>();

  onAdd() {
    if (this.parent && this.isValid()) {
      const item: { product_id: string; quantity: number } = this.parent.get(
        'selector',
      ).value;

      this.added.emit({
        ...item,
        // transform item to Item type
        product_id: parseInt(item.product_id),
      });

      this.parent.get('selector').reset({
        product_id: '',
        quantity: 10,
      });
    }
  }

  isValid() {
    if (!this.parent) {
      return false;
    }
    if (typeof this.parent.get('selector').value.product_id === 'string') {
      return false;
    }
    return true;
  }
}
