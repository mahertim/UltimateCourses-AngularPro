import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor(private http: Http) {}

  getFolder(folder: string): Observable<Mail[]> {
    return this.http.get(`api/messages?folder=${folder}`).map((response) => {
      return response.json();
    });
  }

  getMessage(id: string): Observable<Mail> {
    return this.http.get(`api/messages/${id}`).map((response) => {
      return response.json();
    });
  }
}
