import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.class';

@Component({
  selector: 'app-seller-pending-order',
  templateUrl: './seller-pending-order.component.html',
  styleUrls: ['./seller-pending-order.component.css']
})
export class SellerPendingOrderComponent implements OnInit {

  private order: Cart[];

  constructor() { }

  ngOnInit() {
  }

}
