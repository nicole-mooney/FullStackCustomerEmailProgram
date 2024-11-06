import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CustomerEmailService } from '../../services/customer-email.service';
import { SessionStorageService } from 'ngx-webstorage';
import { CustomerEmail } from '../../models/customer-email';
import { faTrash, faEnvelope, faPerson } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { SendEmailDialog } from '../../shared/dialogs/send-email/send-email.dialog';
import { NewEmailRequest } from '../../models/requests/new-email-request';
import { SessionStorageLocalService } from '../../services/session-storage.service';

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
    isReady = false;
    selectedCustomer: CustomerEmail;
    @Input() public data: CustomerEmail[] = [];

    constructor(private apiService: CustomerEmailService, 
      private dialog: MatDialog,
      private sessionStore: SessionStorageLocalService) { }

  // initial load of html page. Get necessary data to display.
  ngOnInit() {
    this.emailTableData = this.data;
    this.storeData(-1);
    this.isReady = true;
  }   

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.isReady = false;
      this.emailTableData = this.data;      
      this.retrieveData();
      this.isReady = true;
    }
  } 
  
  // open send email dialog
  openSendEmailDialog(ce: CustomerEmail) {
    let dialogRef = this.dialog.open(SendEmailDialog, {
      data: { customerName: ce.customerName, customerId: ce.customerId, emailId: ce.emailId },
      width: 'fit-content',
      height: 'fit-content',
      position: {
        top: '-60%',
        left: '40%',
      }
    }).afterClosed().subscribe((newTable: CustomerEmail[]) => {
      this.isReady = false;
      this.emailTableData = newTable;
      this.retrieveData();
      this.isReady = true;
    });
  }

  // call service for deleting email
  deleteCustomerEmail(email: CustomerEmail) {
    this.apiService.deleteEmail(email.emailId).subscribe((deleted: boolean) => {
      if (deleted) {
        this.isReady = false;
        let index = this.emailTableData.findIndex(ce => ce.emailId === email.emailId);
        this.emailTableData.splice(index, 1);
        this.storeData(this.emailTableData.findIndex(ce => ce.customerId === email.customerId));
        this.retrieveData();
        this.isReady = true;
      }
    });
    
  }

  //call service for deleting customer
  deleteCustomer(ce: CustomerEmail) {
    this.apiService.deleteCustomer(ce.customerId).subscribe((deleted: boolean) => {
      if (deleted) {
        var deletedCustomerEmails = this.emailTableData.filter(c => c.customerId === ce.customerId);
        deletedCustomerEmails.forEach(de => {
          this.isReady = false;
          let index = this.emailTableData.findIndex(c => c.customerId === de.customerId);
          this.emailTableData.splice(index, 1);  
          this.isReady = true;
        });         
      }
    })
  }

  private storeData(index: number) {
    this.sessionStore.setItem('customerLastTouchedIndex', index.toString());
  }

  private retrieveData() {
    const index = Number(this.sessionStore.getItem('customerLastTouchedIndex'));
    this.selectedCustomer = this.emailTableData[index];
  }
}