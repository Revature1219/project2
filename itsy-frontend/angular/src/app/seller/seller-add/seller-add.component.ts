import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.class';
import { ItemService } from 'src/app/service/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.css']
})
export class SellerAddComponent implements OnInit {

  private item: Item;

  constructor(private itemService: ItemService, private router: Router) {
    this.item = new Item();
  }

  addItem() {
    this.itemService.addItem(this.item).subscribe(res => this.gotoItemList());
  }

  gotoItemList(): void {
    this.item = new Item();
    this.router.navigate(['/seller']);
  }

  ngOnInit() {
  }

}
