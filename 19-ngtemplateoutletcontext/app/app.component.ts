import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  ctx = {
    $implicit: 'Tim Maher',
    location: 'Columbia, MD',
  };
}
