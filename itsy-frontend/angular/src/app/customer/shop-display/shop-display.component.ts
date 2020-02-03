import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Seller } from 'src/app/model/seller.class';
import { SellerService } from "../../service/seller.service";
import { Item } from "../../model/item.class";
import { ItemService } from "../../../item.service";
import { StartConversationService } from 'src/app/messaging/start-conversation.service';

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
    private startConvoService: StartConversationService,
    private location: Location) { }

  ngOnInit() {
    this.getSeller();

  }

  getSeller(){
    const id = parseInt(this.route.snapshot.paramMap.get('sellerid'));
    this.sellerService.getSellerById(id).subscribe(seller => {
      this.seller = seller;
      this.itemService.getAllItemsBySeller(this.seller).subscribe(items => this.items = items);
    });
  }
  startConvo(){
    let testseller:Seller;
    testseller={
                id:2,
              name:"",
              password:""}
    console.log("start")
    this.startConvoService.startConvo(this.seller);
  }
}
