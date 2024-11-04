import { NgModule } from '@angular/core';

import { CustomersComponent } from './components/all-existing-customers/all-existing-customers.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomersComponent,
  ],
})
export class NavModule { }