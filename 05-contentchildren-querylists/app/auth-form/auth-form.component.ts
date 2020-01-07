import {
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';

import { User } from './auth-form.interface';

type BetterQueryList<T> = QueryList<T> | null;

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean = false;

  @ContentChildren(AuthRememberComponent)
  remember: BetterQueryList<AuthRememberComponent> = null;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach((item: AuthRememberComponent) => {
        item.checked.subscribe(
          (checked: boolean) => (this.showMessage = checked),
        );
      });
    }
  }
}
