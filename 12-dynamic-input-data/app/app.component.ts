import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

type BetterViewContainerRef = ViewContainerRef | null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef })
  entry: BetterViewContainerRef = null;

  constructor(private resolver: ComponentFactoryResolver) {}

  loginUser(user: User) {
    console.log('Login', user);
  }

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent,
    );
    if (this.entry) {
      const component = this.entry.createComponent(authFormFactory);
      component.instance.title = 'Create Account';
    }
  }
}
