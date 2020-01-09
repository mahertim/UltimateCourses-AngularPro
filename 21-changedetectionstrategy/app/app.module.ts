import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleOneComponent } from './one/one.component';
import { ExampleTwoComponent } from './two/two.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ExampleOneComponent, ExampleTwoComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
