import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'auth-remember',
  templateUrl: './auth-remember.component.html',
})
export class AuthRememberComponent {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: boolean) {
    this.checked.emit(value);
  }
}
