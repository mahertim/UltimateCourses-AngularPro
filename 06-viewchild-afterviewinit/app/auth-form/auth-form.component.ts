import {
  Component,
  Output,
  ViewChild,
  AfterViewInit,
  EventEmitter,
  ContentChildren,
  AfterContentInit,
  QueryList,
} from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

type BetterQueryList<T> = QueryList<T> | null;

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean = false;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent | null = null;

  @ContentChildren(AuthRememberComponent)
  remember: BetterQueryList<AuthRememberComponent> = null;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 30;
    }
    if (this.remember) {
      this.remember.forEach((item: AuthRememberComponent) => {
        item.checked.subscribe(
          (checked: boolean) => (this.showMessage = checked),
        );
      });
    }
  }

  ngAfterViewInit() {
    // cannot change view data here
    // do that in ngAfterContentInit() instead
  }
}
