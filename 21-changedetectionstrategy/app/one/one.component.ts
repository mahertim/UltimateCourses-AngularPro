import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'example-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./one.component.scss'],
  templateUrl: './one.component.html',
})
export class ExampleOneComponent {
  @Input()
  user: any = {};

  update() {
    this.user.name = 'Updated';
  }
}
