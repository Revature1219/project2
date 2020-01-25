import { Component, OnInit } from '@angular/core';
import { ITEMS } from "../mock-items";
import { Item } from "../item";

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
  items: Item[] = ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
