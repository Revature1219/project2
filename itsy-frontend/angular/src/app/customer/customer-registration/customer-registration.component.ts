import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.class';
import { RegistrationService } from 'src/app/service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {


    customer: Customer;
    constructor(private service: RegistrationService,
                private route: Router) { }

    ngOnInit() {
        this.customer = new Customer();
    }

    register() {
        this.service.registCustomer(this.customer).subscribe(
            res => {
                this.route.navigate(['/customer/login']);
            },
            err => {
                console.log(err);
            }
        );
    }
}
