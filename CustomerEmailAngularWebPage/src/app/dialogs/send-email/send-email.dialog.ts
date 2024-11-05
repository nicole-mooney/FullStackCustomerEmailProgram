import { Component, OnInit } from '@angular/core';
import { CustomerEmailService } from '../../services/customer-email.service';
import { SessionStorageService } from 'ngx-webstorage';
import { CustomerEmail } from '../../models/customer-email';

@Component({
  selector: 'send-email',
  templateUrl: './send-email.dialog.html',
  styleUrl: './send-email.dialog.scss'
})
export class SendEmailDialog implements OnInit {
  
    constructor(private apiService: CustomerEmailService) { }

  ngOnInit() {
  } 

  sendEmailToCustomer(customerId: string) {
    // open send email dialog
  }
}