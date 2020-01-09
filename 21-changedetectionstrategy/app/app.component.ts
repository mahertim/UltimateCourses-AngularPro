import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './app.component.html',
})
export class AppComponent {
  user: any = {
    name: 'Tim Maher',
    age: 25,
    location: 'Maryland',
  };

  addProp() {
    this.user.email = 'tim@timmaher.dev';
  }

  changeName() {
    this.user.name = 'Timothy Maher';
  }

  changeUser() {
    this.user = {
      name: 'Holly Asbury',
      age: 22,
      location: 'California',
    };
  }
}
