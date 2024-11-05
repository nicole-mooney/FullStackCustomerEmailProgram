import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { NavModule } from './nav.module';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { SendEmailDialog } from './shared/dialogs/send-email/send-email.dialog';
import { CustomerEmail } from './models/customer-email';
import { NewCustomerFormDialog } from './shared/dialogs/new-customer-form/new-customer-form.dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, NavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faPeopleGroup = faPeopleGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  } 

  // open send email dialog to bulk send an email to all customers
  openSendEmailDialog() {
    let dialogRef = this.dialog.open(SendEmailDialog, {
      data: { isBulkEmail: true },
      position: {
        top: '-50%',
        left: '10%',
      }
    }).afterClosed().subscribe((newTable: CustomerEmail[]) => {
      //This is where I would send the new table to the <all-existing-customers> html tag and via an inject in the .ts file
    });
  }

  // open send email dialog to bulk send an email to all customers
  openAddNewCustomerDialog() {
    let dialogRef = this.dialog.open(NewCustomerFormDialog, {
      position: {
        top: '-50%',
        left: '10%',
      }
    }).afterClosed().subscribe((newTable: CustomerEmail[]) => {
      //This is where I would send the new table to the <all-existing-customers> html tag and via an inject in the .ts file
    });
  }
}
