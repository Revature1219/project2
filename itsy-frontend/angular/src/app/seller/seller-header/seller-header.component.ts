import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/service/session.service';

@Component({
    selector: 'app-seller-header',
    templateUrl: './seller-header.component.html',
    styleUrls: ['./seller-header.component.css']
})
export class SellerHeaderComponent implements OnInit {

    name: string;

    constructor(private session: SessionService) { }

    ngOnInit() {
        this.name = this.session.getSeller().name;
    }

    logout() {
        this.session.endSession();
    }

}
