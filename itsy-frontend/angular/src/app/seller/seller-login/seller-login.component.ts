import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/model/seller.class';
import { SessionService } from 'src/app/service/session.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-seller-login',
    templateUrl: './seller-login.component.html',
    styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {

    seller: Seller;
    constructor(private session: SessionService, private route: Router) {
        this.seller = new Seller();
    }

    ngOnInit() {
    }

    login() {
        console.log(this.seller);
        this.session.loginSeller(this.seller).subscribe(
            res => {
                // this.customer = res;
                this.session.beginSellerSession(res);
                this.route.navigate(['/seller']);
            },
            err => {
                console.log('ERROR LOGGING IN for seller....');
                console.log(err);
            }
        );
    }

}
