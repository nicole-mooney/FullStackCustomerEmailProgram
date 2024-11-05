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

@Component({
  selector: 'send-email',
  templateUrl: './send-email.dialog.html',
  styleUrl: './send-email.dialog.scss',
})
export class SendEmailDialog implements OnInit {

  emailMessage: string = "";
  output: CustomerEmail[] = [];

  constructor(public dialogRef: MatDialogRef<SendEmailDialog>, 
    @Inject(MAT_DIALOG_DATA) public inputData: {isBulkEmail: boolean, customerId: string},
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

  sendEmail() {
    if (this.inputData.isBulkEmail) {
      this.apiService.bulkSendEmail(this.emailMessage).subscribe((sent: boolean) => {
        if (sent) {
            let customers = this.output.map((customerEmail) => ({id: customerEmail.customerId, name: customerEmail.customerName}))
              .filter((value, index, self) => self.indexOf(value) === index);
            customers.forEach(c => {
              //Here, I would actually be using the new GUID saved in the DB to replace the empty guid if I were to do it this way manually
              //However, the correct way would be that getallcustomeremails would return the NEW list instead of the pre-existing one.
              //This is because I did not associated a SQL Database to the application at this time.
              this.output.push(new CustomerEmail(c.name, c.id, this.emailMessage, "00000000-0000-0000-0000-000000000000", false, new Date(), new Date()))
            });
            this.closeDialog();
        }
      });
    } else {
      this.apiService.sendNewEmail(new NewEmailRequest(this.inputData.customerId, this.emailMessage)).subscribe((sent: boolean) => {
        if (sent) {
            this.output.push(new CustomerEmail("existing customer sent again - this is a filler", this.inputData.customerId, this.emailMessage, "00000000-0000-0000-0000-000000000000", false, new Date(), new Date()))
            this.closeDialog();
        }
      });
    }
  }
}