import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SongsFavoritesComponent } from './components/songs-favorites/songs-favorites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';

import { SongsService } from './services/songs.service';

@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [SongsService],
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
