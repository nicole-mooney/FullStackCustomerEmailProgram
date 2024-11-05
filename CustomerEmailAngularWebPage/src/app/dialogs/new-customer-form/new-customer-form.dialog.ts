import { Component, OnInit } from '@angular/core';
import { CustomerEmailService } from '../../services/customer-email.service';
import { SessionStorageService } from 'ngx-webstorage';
import { CustomerEmail } from '../../models/customer-email';

@Component({
  selector: 'new-customer-form',
  templateUrl: './new-customer-form.dialog.html',
  styleUrl: './new-customer-form.dialog.scss'
})
export class NewCustomerFormDialog implements OnInit {

  displayedColumns: string[] = ['customerName', 'message', 'empty'];
  customerEmailData: CustomerEmail[] = [];
  
    constructor(private apiService: CustomerEmailService) { }

  ngOnInit() {
  } 

  addNewCustomer() {
    // open add new customer dialog form
  }
}