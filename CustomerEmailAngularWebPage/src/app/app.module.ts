import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavModule } from './nav.module';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxWebstorage } from 'ngx-webstorage';
import { MatTableModule } from '@angular/material/table';  

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    NavModule,
    RouterModule,
    MatTableModule,
  ],
  providers: [provideHttpClient(), provideNgxWebstorage()],
  bootstrap: [AppComponent]
})
export class AppModule { }