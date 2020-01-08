import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  styleUrls: ['./auth-form.component.scss'],
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent {
  title: string = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
