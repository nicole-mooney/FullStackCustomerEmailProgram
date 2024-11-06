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
    private apiService: CustomerEmailService
  ) { }

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
          this.output.unshift(new CustomerEmail(this.firstName + " " + this.lastName, "00000000-0000-0000-0000-000000000000", this.initialMessage, "00000000-0000-0000-0000-000000000000", false, new Date(), new Date()));
        }
        this.closeDialog()
    });
  }
}