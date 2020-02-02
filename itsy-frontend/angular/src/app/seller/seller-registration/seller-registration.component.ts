import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/model/seller.class';
import { RegistrationService } from 'src/app/service/registration.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-seller-registration',
    templateUrl: './seller-registration.component.html',
    styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent implements OnInit {

    seller: Seller;
    constructor(private service: RegistrationService,
                private route: Router) { }

    ngOnInit() {
        this.seller = new Seller();
    }

    register() {
        this.service.registSeller(this.seller).subscribe(
            res => {
                this.route.navigate(['/seller/login']);
            },
            err => {
                console.log(err);
            }
        );
    }

}
