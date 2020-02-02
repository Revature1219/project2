import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.class';
import { SessionService } from 'src/app/service/session.service';
import { RouterLink, Route, Router } from '@angular/router';

@Component({
    selector: 'app-customer-login',
    templateUrl: './customer-login.component.html',
    styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

    customer: Customer;

    constructor(private session: SessionService,
                private route: Router) { }

    ngOnInit() {
        this.customer = new Customer();
    }

    login() {
        this.session.loginCustomer(this.customer).subscribe(
            res => {
                this.customer = res;
                this.session.beginCustomerSession(this.customer);
                this.route.navigate(["/customer"]);
            },
            err => {
                console.log(err);
            }
        );
    }

}
