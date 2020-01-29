import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Seller } from 'src/app/model/seller.class';
import { SellerService } from "../../../seller.service";
import { Item } from "../../model/item.class";
import { ItemService } from "../../../item.service";

@Component({
  selector: 'app-shop-display',
  templateUrl: './shop-display.component.html',
  styleUrls: ['./shop-display.component.css']
})
export class ShopDisplayComponent implements OnInit {

  seller: Seller;
  items: Item[];

  constructor(
    private route: ActivatedRoute,
    private sellerService: SellerService,
    private itemService: ItemService,
    private location: Location) { }

  ngOnInit() {
    this.getSeller();

  }

  getSeller(){
    const name = this.route.snapshot.paramMap.get('sellername');
    this.sellerService.getSeller(name).subscribe(seller => {
      this.seller = seller;
      this.itemService.getItemsBySeller(this.seller.id).subscribe(items => this.items = items);
    });
  }

}
