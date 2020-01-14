import { Component, Input } from '@angular/core';

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
}
