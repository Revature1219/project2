import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from "../../service/item.service";
import { Item } from '../../model/item.class';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.item = null;
    this.getItem();
  }

  getItem(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItemById(id).subscribe(item =>this.item = item);
  }

}
