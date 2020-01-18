import { Component } from '@angular/core';

import { Store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  todos$ = this.store.select<any[]>('todos');

  constructor(private store: Store) {
    this.store.set('todos', [
      { id: 1, name: 'Eat dinner' },
      { id: 1, name: 'Do washing' },
    ]);
  }
}
