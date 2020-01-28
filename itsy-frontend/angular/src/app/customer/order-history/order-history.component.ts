import { Component, OnInit } from '@angular/core';
import {Cart } from '../../model/cart.class';
import { Item } from "../../model/item.class";
import { ItemService } from "../../../item.service";
import { Seller } from 'src/app/model/seller.class';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  order: Cart;
  items: Item[];

  constructor(private service: ItemService) { }

  ngOnInit() {
    this.order = new Cart();
    this.order.id=1;
  }

}
