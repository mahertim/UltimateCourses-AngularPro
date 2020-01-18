import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';

import { Store } from '../../../store';

import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'songs-playlist',
  templateUrl: './songs-playlist.component.html',
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$: Observable<any[]> = Observable.of([]);
  subscription: Subscription = this.playlist$.subscribe();

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  onToggle(event: any) {
    this.songsService.toggle(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
