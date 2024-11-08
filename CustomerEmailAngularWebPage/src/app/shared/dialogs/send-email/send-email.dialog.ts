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
import { SessionStorageLocalService } from '../../../services/session-storage.service';

@Component({
  selector: 'send-email',
  templateUrl: './send-email.dialog.html',
  styleUrl: './send-email.dialog.scss',
})
export class SendEmailDialog implements OnInit {

  emailMessage: string = "";
  output: CustomerEmail[] = [];

  constructor(public dialogRef: MatDialogRef<SendEmailDialog>, 
    @Inject(MAT_DIALOG_DATA) public inputData: {isBulkEmail: boolean, customerName: string, customerId: string, emailId: string},
    private apiService: CustomerEmailService, private sessionStore: SessionStorageLocalService) { }

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
            let customers = [...new Set(this.output.map((ce) => ce.customerId)),
                ].map((id) => this.output.find((p) => p.customerId === id)!);
            customers.forEach(c => {
              //Here, I would actually be using the new GUID saved in the DB to replace the empty guid if I were to do it this way manually
              //However, the correct way would be that getallcustomeremails would return the NEW list instead of the pre-existing one.
              //This is because I did not associated a SQL Database to the application at this time.
              this.output.unshift(new CustomerEmail(c.customerName, c.customerId, this.emailMessage, "00000000-0000-0000-0000-000000000000", false, new Date(), new Date()))
            });
            this.closeDialog();
        }
      });
    } else {
      this.apiService.sendNewEmail(new NewEmailRequest(this.inputData.customerId, this.emailMessage)).subscribe((sent: boolean) => {
        if (sent) {
            this.output.unshift(new CustomerEmail(this.inputData.customerName, this.inputData.customerId, this.emailMessage, "00000000-0000-0000-0000-000000000000", false, new Date(), new Date()))
            this.storeData(this.output.findIndex(ce => ce.customerId === this.inputData.customerId && ce.emailId === this.inputData.emailId));
            this.closeDialog();
        }
      });
    }
  }

  private storeData(index: number) {
    this.sessionStore.setItem('customerLastTouchedIndex', index.toString());
  }
}