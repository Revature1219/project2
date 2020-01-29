import { Component, OnInit,Input } from '@angular/core';
import { Review } from 'src/app/model/review.class';
import { Item } from 'src/app/model/item.class';

@Component({
  selector: 'app-itemreview',
  templateUrl: './itemreview.component.html',
  styleUrls: ['./itemreview.component.css']
})
export class ItemreviewComponent implements OnInit {

  @Input() item: Item;
  userReview:Review = { id:0,
                        customer:null,
                        rating:0,
                        message:"",
                        date:new Date(),
                        seller:null,
                        item:this.item
                      };
  constructor() { }

  ngOnInit() {
  }

  submitReview(){
    alert(this.userReview.rating);
  }
}
