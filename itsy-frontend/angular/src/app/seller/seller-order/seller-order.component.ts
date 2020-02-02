import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.class';
import { Seller } from 'src/app/model/seller.class';
import { Item } from 'src/app/model/item.class';

@Component({
  selector: 'app-seller-order',
  templateUrl: './seller-order.component.html',
  styleUrls: ['./seller-order.component.css']
})
export class SellerOrderComponent implements OnInit {

  // private carts: Cart[];
  // private seller: Seller;

  carts: Cart[] =
    [
      {
        id: 1, items: [null, null], seller: null, status: null
      },
      {
        id: 2, items: [null, null], seller: null, status: null
      },
      {
        id: 3, items: [null, null], seller: null, status: null
      },
    ];

  constructor() { }

  ngOnInit() {
  }

}
