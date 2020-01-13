import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from '../../models/product.interface';

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
}
