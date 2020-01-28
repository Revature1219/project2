import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { ItemService } from '../../../item.service';
import { Item } from 'src/app/model/item.class';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {

  item: Item;

  constructor(private route: Router,
    private itemService: ItemService) { }

  ngOnInit() {
  }

  getItemByName(){
    //let id = (<HTMLInputElement> document.getElementById('searchBox')).value;
    //this.route.navigate(['item/'+id]);
    let name = (<HTMLInputElement> document.getElementById('searchBox')).value;
    this.itemService.getItemByName(name).subscribe(item => this.item=item);
    this.route.navigate(['item/'+this.item.id]);
  }

}
