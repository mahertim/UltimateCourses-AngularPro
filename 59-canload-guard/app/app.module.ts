import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
  PreloadingStrategy,
  Route,
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && (route.data as { preload: boolean }).preload
      ? fn()
      : Observable.of(null);
  }
}

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    data: { preload: true },
    loadChildren: () => DashboardModule,
  },
  { path: '**', redirectTo: 'mail/folder/inbox' },
];

@NgModule({
  declarations: [AppComponent],
  providers: [CustomPreload],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    AuthModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
