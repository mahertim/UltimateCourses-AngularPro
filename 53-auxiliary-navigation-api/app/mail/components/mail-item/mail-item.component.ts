import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  templateUrl: 'mail-item.component.html',
})
export class MailItemComponent {
  @Input()
  message: Mail = {
    folder: '',
    from: '',
    id: 0,
    summary: '',
    timestamp: 0,
  };

  constructor(private router: Router) {}

  navigateToMessage() {
    this.router.navigate([
      '',
      {
        outlets: {
          pane: ['message', this.message.id],
        },
      },
    ]);
  }
}
