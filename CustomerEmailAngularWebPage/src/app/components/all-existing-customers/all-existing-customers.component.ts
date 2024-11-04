import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerEmailService } from '../../services/customer-email.service';
import { HttpHeaders } from '@angular/common/http';
import { Customer } from '../../models/customer';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'all-existing-customers',
  templateUrl: './all-existing-customers.component.html',
  styleUrl: './all-existing-customers.component.scss'
})
export class CustomersComponent implements OnInit {


    constructor(private apiService: CustomerEmailService, private session: SessionStorageService) { }

  ngOnInit() {
    this.session.store('lastCustomerSelected', 'First Customer');
    console.log("you have hit the all-existing-customers ts file");
  } 

  testAPIService() {
    console.log("We are in the function");
    this.apiService.testAPI().subscribe((output) => {

        console.log(output);

    });
    const lastCustomerTouched = this.session.retrieve('lastCustomerSelected');
  }
}