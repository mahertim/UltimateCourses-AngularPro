import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  ComponentRef,
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

type BetterViewContainerRef = ViewContainerRef | null;
type BetterComponentRef<T> = ComponentRef<T> | null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterContentInit {
  component: BetterComponentRef<AuthFormComponent> = null;

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
      this.component = this.entry.createComponent(authFormFactory);
      this.component.instance.title = 'Create Account';
      this.component.instance.submitted.subscribe(this.loginUser);
    }
  }

  destroyComponent() {
    if (this.component) this.component.destroy();
  }
}
