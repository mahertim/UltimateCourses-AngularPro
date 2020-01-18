import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Store } from '../../../store';

@Component({
  selector: 'songs-favorites',
  templateUrl: './songs-favorites.component.html',
})
export class SongsFavoritesComponent implements OnInit {
  favorites$: Observable<any[]> = Observable.of([]);
  subscription: Subscription = this.favorites$.subscribe();

  constructor(private store: Store) {}

  ngOnInit() {
    this.favorites$ = this.store
      .select('playlist')
      .filter(Boolean)
      .map((playlist) => (playlist as any[]).filter((track) => track.favorite));
  }
}
