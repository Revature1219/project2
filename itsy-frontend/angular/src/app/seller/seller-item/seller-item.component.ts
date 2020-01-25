import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/seller/item.model';

@Component({
  selector: 'app-seller-item',
  templateUrl: './seller-item.component.html',
  styleUrls: ['./seller-item.component.css']
})
export class SellerItemComponent implements OnInit {

  items: Item[] = [
    new Item(1, 'one', 11.1, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about one', 'seller1', 'review1'),

    new Item(2, 'two', 22.2, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about two', 'seller2', 'review2'),

    new Item(3, 'three', 33.3, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about three', 'seller3', 'review3'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
