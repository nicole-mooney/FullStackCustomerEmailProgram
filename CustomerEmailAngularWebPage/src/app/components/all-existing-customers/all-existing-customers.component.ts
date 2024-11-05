import { Component, OnInit } from '@angular/core';
import { CustomerEmailService } from '../../services/customer-email.service';
import { SessionStorageService } from 'ngx-webstorage';
import { CustomerEmail } from '../../models/customer-email';
import { faTrash, faEnvelope, faPerson } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { SendEmailDialog } from '../../shared/dialogs/send-email/send-email.dialog';
import { NewEmailRequest } from '../../models/requests/new-email-request';

@Component({
  selector: 'all-existing-customers',
  templateUrl: './all-existing-customers.component.html',
  styleUrl: './all-existing-customers.component.scss'
})
export class CustomersComponent implements OnInit {

  faTrash = faTrash;
  faEnvelope = faEnvelope;
  faPerson = faPerson;
  displayedColumns: string[] = ['customerName', 'message', 'empty'];
  customerEmailData: CustomerEmail[] = [];
  
    constructor(private apiService: CustomerEmailService, private dialog: MatDialog) { }

  // initial load of html page. Get necessary data to display.
  ngOnInit() {
    this.getAllCustomerEmails();
  } 

  // call service for getting all existing customer emails
  getAllCustomerEmails() {
    this.apiService.getAllCustomerEmails().subscribe((output) => {
        this.customerEmailData = output;
    });
  }
  
  // open send email dialog
  openSendEmailDialog(ce: CustomerEmail) {
    let dialogRef = this.dialog.open(SendEmailDialog, {
      data: { customerId: ce.customerId },
      position: {
        top: '-50%',
        left: '10%',
      }
    }).afterClosed().subscribe((newTable: CustomerEmail[]) => {
      this.customerEmailData = newTable;
    });
  }

  // call service for deleting email
  deleteCustomerEmail(email: CustomerEmail) {
    this.apiService.deleteEmail(email.emailId).subscribe((deleted: boolean) => {
      if (deleted) {
        let index = this.customerEmailData.findIndex(ce => ce.emailId === email.emailId);
        this.customerEmailData.splice(index, 1);
      }
    });
    
  }

  //call service for deleting customer
  deleteCustomer(ce: CustomerEmail) {
    this.apiService.deleteCustomer(ce.customerId).subscribe((deleted: boolean) => {
      if (deleted) {
        //This part of the function would need to be improved to display the new list 
        //of customer emails without the customer who got deleted.
        //Right now, it just deletes the first iteration of the customer in the table.
        let index = this.customerEmailData.findIndex(ce => ce.customerId === ce.customerId);
        this.customerEmailData.splice(index, 1);   
      }
    })
  }
}