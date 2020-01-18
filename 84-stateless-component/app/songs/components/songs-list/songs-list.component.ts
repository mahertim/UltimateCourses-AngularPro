import { Component, Input } from '@angular/core';

import { Song } from '../../services/songs.service';

@Component({
  selector: 'songs-list',
  styleUrls: ['./songs-list.component.scss'],
  templateUrl: './songs-list.component.html',
})
export class SongsListComponent {
  @Input()
  list: Song[] = [];
}
