import {
  Component,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit,
} from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean = false;

  @ContentChild(AuthRememberComponent)
  remember: AuthRememberComponent | null = null;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe(
        (checked: boolean) => (this.showMessage = checked),
      );
    }
  }
}
