import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from "../../model/item.class";

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(items=> this.items=items);
  }

}
