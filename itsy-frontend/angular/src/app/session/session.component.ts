import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';

@Component({
    selector: 'app-session',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

    currentlyInSession: boolean;
    isCustomerSession: boolean;

    inSessionCheck: boolean;
    inCustomerSessionCheck: boolean;

    name: string;

    constructor(private session: SessionService) { }

    ngOnInit() {
        this.currentlyInSession = false;
        this.isCustomerSession = true;
    }

    ngDoCheck() {
        this.inSessionCheck = this.session.isInSession();
        this.inCustomerSessionCheck = this.session.isInCustomerSession();

        // Only touch the flags controlling the UI if a change is made.
        if (this.inSessionCheck !== this.currentlyInSession) {
            this.currentlyInSession = this.inSessionCheck;
        }
        if (this.inCustomerSessionCheck !== this.isCustomerSession) {
            this.isCustomerSession = this.inCustomerSessionCheck;
            if (this.isCustomerSession) {
                if (this.session.getCustomer() != null) {
                    this.name = this.session.getCustomer().name;
                }
            } else {
                if (this.session.getSeller() != null) {
                    this.name = this.session.getSeller().name;
                }
            }
        }
    }

    logout() {
        this.session.endSession();
    }
}
