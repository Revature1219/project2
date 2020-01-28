import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.class';

@Component({
  selector: 'app-seller-item',
  templateUrl: './seller-item.component.html',
  styleUrls: ['./seller-item.component.css']
})
export class SellerItemComponent implements OnInit {

  items: Item[] =
    [
      {
        id: 1, name: '1_name', price: 1, image: null,
        details: '1_details', seller: null, reviews: null
      },
      {
        id: 2, name: '2_name', price: 2, image: null,
        details: '2_details', seller: null, reviews: null
      },
      {
        id: 3, name: '3_name', price: 3, image: null,
        details: '3_details', seller: null, reviews: null
      },
    ];

  constructor() { }

  ngOnInit() {
  }

}
