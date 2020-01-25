import { Component, OnInit } from '@angular/core';
import { Item } from '../item';


@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

  items: Item[] = [
    new Item(1, 'one', 11.1, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about one', 'seller1', 'review1'),

    new Item(2, 'two', 22.2, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about two', 'seller2', 'review2'),

    new Item(3, 'three', 33.3, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about three', 'seller3', 'review3'),
    new Item(4, 'four', 44.4, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about four', 'seller4', 'review4'),
    new Item(5, 'five', 55.5, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about five', 'seller5', 'review5'),
    new Item(6, 'six', 66.6, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about six', 'seller6', 'review6'),
    new Item(7, 'seven', 77.7, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about seven', 'seller7', 'review7'),
    new Item(8, 'eight', 88.8, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about eight', 'seller8', 'review8'),
    new Item(9, 'nine', 99.9, 'https://i.etsystatic.com/7129749/r/il/6a21e2/1327863914/il_1588xN.1327863914_qouf.jpg',
      'about nine', 'seller9', 'review9')
  ];

  constructor() { }

  ngOnInit() {
  }

}
