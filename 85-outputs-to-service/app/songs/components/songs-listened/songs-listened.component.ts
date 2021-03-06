import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Store } from '../../../store';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'songs-listened',
  templateUrl: './songs-listened.component.html',
})
export class SongsListenedComponent implements OnInit {
  listened$: Observable<any[]> = Observable.of([]);
  subscription: Subscription = this.listened$.subscribe();

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.listened$ = this.store
      .select('playlist')
      .filter(Boolean)
      .map((playlist) => (playlist as any[]).filter((track) => track.listened));
  }

  onToggle(event: any) {
    this.songsService.toggle(event);
  }
}
