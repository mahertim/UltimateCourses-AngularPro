import { Component } from '@angular/core';

@Component({
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  templateUrl: 'mail-app.component.html',
})
export class MailAppComponent {
  onActivate(event: any) {
    console.log('activate', event);
  }

  onDeactivate(event: any) {
    console.log('deactivate', event);
  }
}
