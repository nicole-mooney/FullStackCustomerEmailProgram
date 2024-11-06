import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { NavModule } from './nav.module';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { SendEmailDialog } from './shared/dialogs/send-email/send-email.dialog';
import { CustomerEmail } from './models/customer-email';
import { NewCustomerFormDialog } from './shared/dialogs/new-customer-form/new-customer-form.dialog';
import { CustomerEmailService } from './services/customer-email.service';
import { SessionStorageLocalService } from './services/session-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, NavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faPeopleGroup = faPeopleGroup;
  customerEmailData: CustomerEmail[] = [];
  isReady = false;
  
  constructor(private apiService: CustomerEmailService, 
    private dialog: MatDialog, private sessionStore: SessionStorageLocalService) { }

  ngOnInit() {
    this.getAllCustomerEmails();
  } 

  // call service for getting all existing customer emails
  getAllCustomerEmails() {
    this.apiService.getAllCustomerEmails().subscribe((output) => {
        this.customerEmailData = output;
        this.storeData(-1);
        this.isReady = true;
    });
  }

  // open send email dialog to bulk send an email to all customers
  openSendEmailDialog() {
    let dialogRef = this.dialog.open(SendEmailDialog, {
      data: { isBulkEmail: true },
      width: 'fit-content',
      height: 'fit-content',
      position: {
        top: '-60%',
        left: '40%',
      }
    }).afterClosed().subscribe((newTable: CustomerEmail[]) => {
      this.isReady = false;
      this.customerEmailData = newTable;
      this.isReady = true;
    });
  }

  // open send email dialog to bulk send an email to all customers
  openAddNewCustomerDialog() {
    let dialogRef = this.dialog.open(NewCustomerFormDialog, {
      width: 'fit-content',
      height: 'fit-content',
      position: {
        top: '-60%',
        left: '40%',
      }
    }).afterClosed().subscribe((newTable: CustomerEmail[]) => {
      this.isReady = false;
      this.customerEmailData = newTable;
      this.isReady = true;    
    });
  }

  private storeData(index: number) {
    this.sessionStore.setItem('customerLastTouchedIndex', index.toString());
  }
}
