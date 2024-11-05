import { Injectable } from '@angular/core';
import { enviornment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerEmail } from '../models/customerEmail';

@Injectable({
  providedIn: 'root'
})
export class CustomerEmailService {

    private apiPath = enviornment.apiUrl;
    private getHeader = new HttpHeaders().set('Content-type', 'application/json');

    constructor(private httpClient: HttpClient) { }

    public testAPI(): Observable<CustomerEmail[]> {
        return this.httpClient.get<CustomerEmail[]>(this.apiPath + 'CustomerEmails/GetCustomerEmails', {headers: this.getHeader, withCredentials: true});
    }
}
