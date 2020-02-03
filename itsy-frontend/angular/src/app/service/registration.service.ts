import { Injectable } from '@angular/core';
import { Seller } from '../model/seller.class';
import { Customer } from '../model/customer.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor(private service: HttpClient, private url: UrlService) { }

    registSeller(seller: Seller): Observable<Seller> {
        return this.service.post<Seller>(this.url.getBackendURLWithSlash() + "seller", seller);
    }

    registCustomer(customer: Customer): Observable<Customer> {
        return this.service.post<Customer>(this.url.getBackendURLWithSlash() + "customer", customer);
    }
}
