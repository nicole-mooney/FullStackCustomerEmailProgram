import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavModule } from './nav.module';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxWebstorage } from 'ngx-webstorage';
import { MatTableModule } from '@angular/material/table';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    NavModule,
    RouterModule,
    MatTableModule,
    FontAwesomeModule
  ],
  providers: [provideHttpClient(), provideNgxWebstorage()],
  bootstrap: [AppComponent]
})
export class AppModule { }