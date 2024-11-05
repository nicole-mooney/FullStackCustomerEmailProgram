import { Component, OnInit } from '@angular/core';
import { CustomerEmailService } from '../../services/customer-email.service';
import { SessionStorageService } from 'ngx-webstorage';
import { CustomerEmail } from '../../models/customer-email';

@Component({
  selector: 'all-existing-customers',
  templateUrl: './all-existing-customers.component.html',
  styleUrl: './all-existing-customers.component.scss'
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['customerName', 'message', 'empty'];
  customerEmailData: CustomerEmail[] = [];
  
    constructor(private apiService: CustomerEmailService) { }

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
  openSendEmailDialog(customerId: string) {
  }

  // open add new customer dialog form
  openAddNewCustomer() {
    
  }

  // call service for deleting email
  deleteCustomerEmail(email: CustomerEmail) {
    console.log(email);
    debugger;
    let deleted = this.apiService.deleteEmail(email.emailId);
    if (deleted) {
      let index = this.customerEmailData.findIndex(ce => ce.emailId === email.emailId);
      this.customerEmailData.splice(index, 1);
    }
  }

  //call service for deleting customer
  deleteCustomer() {
  }
}