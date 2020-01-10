import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

type BetterFormGroup = FormGroup | null;

@Component({
  selector: 'stock-products',
  styleUrls: ['./stock-products.component.scss'],
  templateUrl: './stock-products.component.html',
})
export class StockProductsComponent {
  @Input()
  parent: BetterFormGroup = null;
}
