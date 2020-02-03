import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.class';
import { ItemService } from "../../../item.service";
import { SessionService } from 'src/app/service/session.service';
import { Customer } from 'src/app/model/customer.class';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders: Cart[];
  customer: Customer;

  constructor(private itemService: ItemService, private sessionService: SessionService) { }

  ngOnInit() {
    if (this.sessionService.inCustomerSession){
      this.customer = this.sessionService.getCustomer();
      this.orders = this.customer.carts;
    }
    else {
      this.customer = null;
    }
  }

}
