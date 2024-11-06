import { Component, Inject, input, OnInit } from '@angular/core';
import { CustomerEmailService } from '../../../services/customer-email.service';
import { SessionStorageService } from 'ngx-webstorage';
import { CustomerEmail } from '../../../models/customer-email';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NewEmailRequest } from '../../../models/requests/new-email-request';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NewCustomerRequest } from '../../../models/requests/new-customer-request';
import { SessionStorageLocalService } from '../../../services/session-storage.service';

@Component({
  selector: 'new-customer-form',
  templateUrl: './new-customer-form.dialog.html',
  styleUrl: './new-customer-form.dialog.scss',
})
export class NewCustomerFormDialog implements OnInit {

  initialMessage: string = "";
  firstName: string = "";
  lastName: string = "";
  output: CustomerEmail[] = [];

  constructor(public dialogRef: MatDialogRef<NewCustomerFormDialog>, 
    private apiService: CustomerEmailService, private sessionStore: SessionStorageLocalService) { }

  ngOnInit() {
    this.apiService.getAllCustomerEmails().subscribe((output) => {
      this.output = output;
    });
  }

  closeDialog() {
      this.dialogRef.close(this.output);
  }

  createCustomer() {
    this.apiService.createCustomer(new NewCustomerRequest(this.firstName, this.lastName, this.initialMessage)).subscribe((output: any) => {
        if (this.initialMessage) {
          //Here, I would actually be using the new GUIDs saved in the DB to replace the empty guid if I were to do it this way manually
          //However, the correct way would be that getallcustomeremails would return the NEW list instead of the pre-existing one.
          //This is because I did not associated a SQL Database to the application at this time.   
          this.output.unshift(new CustomerEmail(this.firstName + " " + this.lastName, "00000000-0000-0000-0000-000000000000", this.initialMessage, "00000000-0000-0000-0000-000000000000", false, new Date(), new Date()));
          this.storeData(this.output.findIndex(ce => ce.customerId === "00000000-0000-0000-0000-000000000000" && ce.emailId === "00000000-0000-0000-0000-000000000000"));
        }
        this.closeDialog()
    });
  }

  private storeData(index: number) {
    this.sessionStore.setItem('customerLastTouchedIndex', index.toString());
  }
}