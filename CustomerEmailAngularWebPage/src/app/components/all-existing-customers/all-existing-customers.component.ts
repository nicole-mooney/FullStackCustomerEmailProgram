import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class CustomersComponent implements OnInit, OnChanges {

    faTrash = faTrash;
    faEnvelope = faEnvelope;
    faPerson = faPerson;
    displayedColumns: string[] = ['customerName', 'message', 'empty'];
    emailTableData: CustomerEmail[] = [];
    @Input() public data: CustomerEmail[] = [];

    constructor(private apiService: CustomerEmailService, 
      private dialog: MatDialog) { }

  // initial load of html page. Get necessary data to display.
  ngOnInit() {
    this.emailTableData = this.data;
  }   

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.emailTableData = this.data;
    }
  }
  
  // open send email dialog
  openSendEmailDialog(ce: CustomerEmail) {
    let dialogRef = this.dialog.open(SendEmailDialog, {
      data: { customerId: ce.customerId },
      width: 'fit-content',
      height: 'fit-content',
      position: {
        top: '-60%',
        left: '40%',
      }
    }).afterClosed().subscribe((newTable: CustomerEmail[]) => {
      this.emailTableData = newTable;
    });
  }

  // call service for deleting email
  deleteCustomerEmail(email: CustomerEmail) {
    this.apiService.deleteEmail(email.emailId).subscribe((deleted: boolean) => {
      if (deleted) {
        let index = this.emailTableData.findIndex(ce => ce.emailId === email.emailId);
        this.emailTableData.splice(index, 1);
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
        let index = this.emailTableData.findIndex(ce => ce.customerId === ce.customerId);
        this.emailTableData.splice(index, 1);   
      }
    })
  }
}