import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.class';
import { ItemService } from 'src/app/service/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seller-edit',
  templateUrl: './seller-edit.component.html',
  styleUrls: ['./seller-edit.component.css']
})
export class SellerEditComponent implements OnInit {

  private item: Item;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItemById(id).subscribe(data => {
      this.item = data;
    });
  }

  updateItem() {
    this.itemService.updateItem(this.item).subscribe(res => this.gotoItemList());
  }

  deleteItem() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.deleteItem(id).subscribe(res => this.gotoItemList());
  }

  gotoItemList(): void {
    this.router.navigate(['/seller']);
  }

}
