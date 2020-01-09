import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'example-two',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./two.component.scss'],
  templateUrl: './two.component.html',
})
export class ExampleTwoComponent {
  @Input()
  user: any = {};

  update() {
    this.user.name = 'Did Not Update';
  }
}
