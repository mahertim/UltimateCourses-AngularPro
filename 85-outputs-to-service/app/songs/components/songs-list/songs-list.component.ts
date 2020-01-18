import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Song } from '../../services/songs.service';

@Component({
  selector: 'songs-list',
  styleUrls: ['./songs-list.component.scss'],
  templateUrl: './songs-list.component.html',
})
export class SongsListComponent {
  @Input()
  list: Song[] = [];

  @Output()
  toggle = new EventEmitter<any>();

  toggleSong(index: number, prop: 'listened' | 'favorite') {
    const track = this.list[index];
    this.toggle.emit({
      track: { ...track, [prop]: !track[prop] },
    });
  }
}
