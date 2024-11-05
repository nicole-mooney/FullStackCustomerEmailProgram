import { Injectable } from '@angular/core';
import { enviornment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerEmail } from '../models/customer-email';
import { NewCustomerRequest } from '../models/requests/new-customer-request';
import { NewEmailRequest } from '../models/requests/new-email-request';
import { UpdateEmailRequest } from '../models/requests/update-email-request';

@Injectable({
  providedIn: 'root'
})
export class CustomerEmailService {

    private apiPath = enviornment.apiUrl;
    private apiHeader = new HttpHeaders().set('Content-type', 'application/json');

    constructor(private httpClient: HttpClient) { }
    
    public bulkSendEmail(emailMessage: string): any {
      return this.httpClient.post<boolean>(this.apiPath + 'CustomerEmails/BulkSendEmail', JSON.stringify(emailMessage),{headers: this.apiHeader});
    }
    public createCustomer(newCustomer: NewCustomerRequest): any {

      return this.httpClient.post<boolean>(this.apiPath + 'CustomerEmails/GetCustomerEmails', JSON.stringify(newCustomer),{headers: this.apiHeader});
    }
    public deleteCustomer(customerId: string): any {
      return this.httpClient.post<boolean>(this.apiPath + 'CustomerEmails/GetCustomerEmails', JSON.stringify(customerId),{headers: this.apiHeader});
    }
    public deleteEmail(emailId: string): any {
      return this.httpClient.post<boolean>(this.apiPath + 'CustomerEmails/GetCustomerEmails', JSON.stringify(emailId),{headers: this.apiHeader});
    }
    public getAllCustomerEmails(): Observable<CustomerEmail[]> {
      return this.httpClient.get<CustomerEmail[]>(this.apiPath + 'CustomerEmails/GetCustomerEmails', {headers: this.apiHeader, withCredentials: true});
  }
    public sendNewEmail(newCustomerEmail: NewEmailRequest): any {
      return this.httpClient.post<CustomerEmail>(this.apiPath + 'CustomerEmails/GetCustomerEmails', JSON.stringify(newCustomerEmail),{headers: this.apiHeader});
    }
    public updateDraftEmail(draftEmail: UpdateEmailRequest): any {
      return this.httpClient.post<CustomerEmail>(this.apiPath + 'CustomerEmails/GetCustomerEmails', JSON.stringify(draftEmail),{headers: this.apiHeader});
    }
}
