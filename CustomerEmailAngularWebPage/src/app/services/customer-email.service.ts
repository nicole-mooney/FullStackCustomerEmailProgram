import { Injectable } from '@angular/core';
import { enviornment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerEmailService {

    private apiPath = enviornment.apiUrl;
    private getHeader = new HttpHeaders().set('Content-type', 'application/json');

    constructor(private httpClient: HttpClient) { }

    public testAPI(): Observable<Customer[]> {
        return this.httpClient.get<Customer[]>(this.apiPath + 'CustomerEmails/GetCustomerEmails', {headers: this.getHeader, withCredentials: true});
    }
}
