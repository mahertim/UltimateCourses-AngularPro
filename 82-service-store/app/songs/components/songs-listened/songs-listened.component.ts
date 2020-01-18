import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';

import { Store } from '../../../store';

@Component({
  selector: 'songs-listened',
  templateUrl: './songs-listened.component.html',
})
export class SongsListenedComponent implements OnInit {
  listened$: Observable<any[]> = Observable.of([]);
  subscription: Subscription = this.listened$.subscribe();

  constructor(private store: Store) {}

  ngOnInit() {
    this.listened$ = this.store.select('playlist');
  }
}
