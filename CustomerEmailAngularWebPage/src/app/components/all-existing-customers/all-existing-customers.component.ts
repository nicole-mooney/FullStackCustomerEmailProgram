import { Component, OnInit } from '@angular/core';
import { CustomerEmailService } from '../../services/customer-email.service';
import { SessionStorageService } from 'ngx-webstorage';
import { CustomerEmail } from '../../models/customerEmail';

@Component({
  selector: 'all-existing-customers',
  templateUrl: './all-existing-customers.component.html',
  styleUrl: './all-existing-customers.component.scss'
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['customerName', 'message', 'empty'];
  customerEmailData: CustomerEmail[] = [];
  
    constructor(private apiService: CustomerEmailService) { }

  ngOnInit() {
    this.getAllCustomerEmails();
  } 

  getAllCustomerEmails() {
    this.apiService.testAPI().subscribe((output) => {
        this.customerEmailData = output;
    });
  }

  sendEmailToCustomer(customerId: string) {
  }
}