import {
  Component,
  Output,
  ViewChildren,
  AfterViewInit,
  EventEmitter,
  ContentChildren,
  AfterContentInit,
  QueryList,
  ChangeDetectorRef,
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

  @ViewChildren(AuthMessageComponent)
  message: BetterQueryList<AuthMessageComponent> = null;

  @ContentChildren(AuthRememberComponent)
  remember: BetterQueryList<AuthRememberComponent> = null;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private changeDetector: ChangeDetectorRef) {}

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

  ngAfterViewInit() {
    if (this.message) {
      this.message.forEach(
        (message: AuthMessageComponent) => (message.days = 30),
      );
    }

    // fix error by alerting angular that we changed things
    this.changeDetector.detectChanges();
  }
}
