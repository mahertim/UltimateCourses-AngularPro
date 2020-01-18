import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SongsFavoritesComponent } from './components/songs-favorites/songs-favorites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [
    SongsFavoritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent,
  ],
  exports: [
    SongsFavoritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent,
  ],
})
export class SongsModule {}
