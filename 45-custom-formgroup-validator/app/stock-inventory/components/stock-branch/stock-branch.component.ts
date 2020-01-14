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

  get invalid() {
    if (this.parent)
      return (
        this.parent.get('store.branch').hasError('invalidBranch') &&
        this.parent.get('store.branch').dirty &&
        !this.required('branch')
      );
    else return false;
  }

  required(name: string) {
    if (this.parent)
      return (
        this.parent.get(`store.${name}`).hasError('required') &&
        this.parent.get(`store.${name}`).touched
      );
    else return false;
  }
}
