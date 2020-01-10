import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['./stock-inventory.component.scss'],
  templateUrl: './stock-inventory.component.html',
})
export class StockInventoryComponent {
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('a11'),
      code: new FormControl('s*'),
    }),
  });

  onSubmit() {
    console.log('Submit: ', this.form.value);
  }
}
