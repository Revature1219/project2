import { Injectable } from '@angular/core';
import { Seller } from '../model/seller.class';
import { Customer } from '../model/customer.class';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UrlService } from './url.service';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    inSession: boolean;
    inCustomerSession: boolean;

    constructor(private http: HttpClient,
        private route: Router,
        private url: UrlService) { }

    ngInit() {
        this.inSession = false;
        this.inCustomerSession = false;
    }

    beginCustomerSession(customer: Customer): boolean {
        if (sessionStorage.length > 0)
            return false;

        console.log("Beginning Customer Session")
        console.log(customer)
        customer.password = "";
        sessionStorage.setItem("customer", JSON.stringify(customer));
        this.inSession = true;
        this.inCustomerSession = true;
        return true;
    }

    loginCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.url.getBackendURL() + "/customer/login", customer);
    }

    loginSeller(seller: Seller): Observable<Seller> {
        return this.http.post<Seller>(this.url.getBackendURL() + "/seller/login", seller);
    }

    beginSellerSession(seller: Seller): boolean {
        if (sessionStorage.length > 0)
            return false;

        seller.password = "";
        sessionStorage.setItem("seller", JSON.stringify(seller));
        this.inSession = true;
        this.inCustomerSession = false;
        return true;
    }

    isInSession(): boolean {
        return this.inSession;
    }

    isInCustomerSession(): boolean {
        return this.inSession && this.inCustomerSession;
    }

    isInSellerSession(): boolean {
        return this.inSession && !this.inCustomerSession;
    }

    getCustomer(): Customer {
        if (sessionStorage.length < 1)
            return null;

        for (let i = 0; i < sessionStorage.length; i++) {
            if (sessionStorage.key(i) == "customer")
                break;
            else {
                if (i == sessionStorage.length - 1)
                    return undefined;
            }
        }
        return JSON.parse(sessionStorage.getItem("customer"));
    }

    getSeller(): Seller {
        if (sessionStorage.length < 1)
            return null;

        for (let i = 0; i < sessionStorage.length; i++) {
            if (sessionStorage.key(i) == "seller")
                break;
            else {
                if (i == sessionStorage.length - 1)
                    return undefined;
            }
        }
        return JSON.parse(sessionStorage.getItem("seller"));
    }

    endSession() {
        this.inSession = false;
        sessionStorage.clear();
        this.route.navigate(['/customer']);
    }
}
