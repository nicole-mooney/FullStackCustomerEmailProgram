import { NgModule } from '@angular/core';

import { CustomersComponent } from './components/all-existing-customers/all-existing-customers.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';  
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { SendEmailDialog } from './shared/dialogs/send-email/send-email.dialog';
import { NewCustomerFormDialog } from './shared/dialogs/new-customer-form/new-customer-form.dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CustomersComponent,
    SendEmailDialog,
    NewCustomerFormDialog,
  ],
  imports: [
    MatTableModule,
    FontAwesomeModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    CustomersComponent,
    SendEmailDialog,
    NewCustomerFormDialog,
    FontAwesomeModule,
    MatDialogModule,
    CommonModule,
    FormsModule
  ],
  bootstrap: [CustomersComponent, SendEmailDialog, NewCustomerFormDialog]
})
export class NavModule { }