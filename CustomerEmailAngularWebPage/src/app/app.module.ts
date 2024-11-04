import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavModule } from './nav.module';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { appConfig } from './app.config';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    NavModule,
    RouterModule,
  ],
  providers: [appConfig.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }