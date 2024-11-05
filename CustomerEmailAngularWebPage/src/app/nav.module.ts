import { NgModule } from '@angular/core';

import { CustomersComponent } from './components/all-existing-customers/all-existing-customers.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FontAwesomeModule
  ],
  exports: [
    CustomersComponent,
    MatTableModule,
    FontAwesomeModule
  ],
})
export class NavModule { }