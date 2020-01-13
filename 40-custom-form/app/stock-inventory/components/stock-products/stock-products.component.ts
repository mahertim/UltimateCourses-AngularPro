import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Product } from '../../models/product.interface';

type BetterFormGroup = FormGroup | null;

@Component({
  selector: 'stock-products',
  styleUrls: ['./stock-products.component.scss'],
  templateUrl: './stock-products.component.html',
})
export class StockProductsComponent {
  @Input()
  parent: BetterFormGroup = null;

  @Input()
  map: Map<number, Product> = new Map<number, Product>();

  @Output()
  removed: EventEmitter<any> = new EventEmitter<any>();

  getProduct(id: number) {
    return this.map.get(id);
  }

  onRemove(group: FormGroup, index: number) {
    this.removed.emit({ group, index });
  }

  get stocks() {
    if (this.parent) return (this.parent.get('stock') as FormArray).controls;
    else return null;
  }
}
