import { Component } from '@angular/core';

import { FormControl, FormGroup, FormArray } from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['./stock-inventory.component.scss'],
  templateUrl: './stock-inventory.component.html',
})
export class StockInventoryComponent {
  products: Product[] = [
    {
      id: 1,
      price: 2800,
      name: 'Macbook Pro',
    },
    {
      id: 2,
      price: 50,
      name: 'USB-C Adaptor',
    },
    {
      id: 3,
      price: 400,
      name: 'iPod',
    },
    {
      id: 4,
      price: 900,
      name: 'iPhone',
    },
    {
      id: 5,
      price: 600,
      name: 'Apple Watch',
    },
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl(''),
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 }),
    ]),
  });

  createStock(stock: { product_id?: any; quantity?: any }) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10),
    });
  }

  onSubmit() {
    console.log('Submit: ', this.form.value);
  }
}
