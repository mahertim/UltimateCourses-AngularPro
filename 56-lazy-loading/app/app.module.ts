import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MailModule } from './mail/mail.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule,
  },
  { path: '**', redirectTo: 'mail/folder/inbox' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    RouterModule.forRoot(ROUTES),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
