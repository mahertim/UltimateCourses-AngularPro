import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  templateUrl: 'mail-folder.component.html',
})
export class MailFolderComponent {
  messages: Observable<Mail[]> = this.route.data.pluck('messages');

  title: Observable<string> = this.route.params.pluck('name');

  constructor(private route: ActivatedRoute) {}
}
