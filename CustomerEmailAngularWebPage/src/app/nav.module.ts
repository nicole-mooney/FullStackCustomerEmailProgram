import { NgModule } from '@angular/core';

import { CustomersComponent } from './components/all-existing-customers/all-existing-customers.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';  

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    CustomersComponent,
    MatTableModule,
  ],
})
export class NavModule { }