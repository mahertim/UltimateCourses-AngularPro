import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { PizzaViewerComponent } from './containers/pizza-viewer/pizza-viewer.component';
import { DrinkViewerComponent } from './containers/drink-viewer/drink-viewer.component';
import { SideViewerComponent } from './containers/side-viewer/side-viewer.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaViewerComponent,
    DrinkViewerComponent,
    SideViewerComponent,
  ],
  imports: [BrowserModule, HttpModule],
  bootstrap: [AppComponent],
  providers: [{ provide: 'api', useValue: '/api/pizzas' }],
})
export class AppModule {}
