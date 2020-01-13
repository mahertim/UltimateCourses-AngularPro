import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

type BetterFormGroup = FormGroup | null;

@Component({
  selector: 'stock-branch',
  styleUrls: ['./stock-branch.component.scss'],
  templateUrl: './stock-branch.component.html',
})
export class StockBranchComponent {
  @Input()
  parent: BetterFormGroup = null;

  required(name: string) {
    if (this.parent) {
      return (
        this.parent.get(`store.${name}`).hasError('required') &&
        this.parent.get(`store.${name}`).touched
      );
    }
    return false;
  }
}
