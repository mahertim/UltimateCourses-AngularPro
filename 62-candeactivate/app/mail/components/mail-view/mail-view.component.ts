import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  templateUrl: 'mail-view.component.html',
})
export class MailViewComponent implements OnInit {
  reply: string = '';

  hasUnsavedChanges: boolean = false;

  message: Observable<Mail> = this.route.data.pluck('message');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.reply = '';
      this.hasUnsavedChanges = false;
    });
  }

  updateReply(value: string) {
    this.reply = value;
    this.hasUnsavedChanges = true;
  }

  sendReply() {
    console.log('Sent!', this.reply);
    this.hasUnsavedChanges = false;
  }
}
