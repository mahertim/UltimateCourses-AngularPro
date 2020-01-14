import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  templateUrl: 'mail-view.component.html',
})
export class MailViewComponent {
  message: Observable<Mail> = this.route.data.pluck('message');
  constructor(private route: ActivatedRoute) {}
}
