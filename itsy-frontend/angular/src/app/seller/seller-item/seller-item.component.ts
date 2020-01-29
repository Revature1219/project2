import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.class';
import { ItemService } from 'src/app/service/item.service';
import { Seller } from 'src/app/model/seller.class';
import { SellerService } from 'src/app/service/seller.service';

@Component({
  selector: 'app-seller-item',
  templateUrl: './seller-item.component.html',
  styleUrls: ['./seller-item.component.css']
})
export class SellerItemComponent implements OnInit {

  private items: Item[];
  private seller: Seller;

  // items: Item[] =
  //   [
  //     {
  //       id: 1, name: '1_name', price: 1, image: null,
  //       details: '1_details', seller: null, reviews: null
  //     },
  //     {
  //       id: 2, name: '2_name', price: 2, image: null,
  //       details: '2_details', seller: null, reviews: null
  //     },
  //     {
  //       id: 3, name: '3_name', price: 3, image: null,
  //       details: '3_details', seller: null, reviews: null
  //     },
  //   ];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAllItemsBySeller(this.seller).subscribe(data => {
      this.items = data;
    });
  }

}
