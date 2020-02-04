import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.class';
import { ItemService } from 'src/app/service/item.service';
import { Seller } from 'src/app/model/seller.class';
import { SellerService } from 'src/app/service/seller.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-seller-item',
  templateUrl: './seller-item.component.html',
  styleUrls: ['./seller-item.component.css']
})
export class SellerItemComponent implements OnInit {

  private items: Item[];
  private seller: Seller;

  constructor(private itemService: ItemService, private session: SessionService) { }

  ngOnInit() {
    this.seller = this.session.getSeller();
    console.log(this.seller.id);

    this.itemService.getAllItemsBySeller(this.seller).subscribe(data => {
      this.items = data;
    });
  }

}
