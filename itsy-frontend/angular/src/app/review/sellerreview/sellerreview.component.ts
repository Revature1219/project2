import { Component, OnInit, Input } from '@angular/core';
import { Seller } from 'src/app/model/seller.class';
import { Review } from 'src/app/model/review.class';

@Component({
  selector: 'app-sellerreview',
  templateUrl: './sellerreview.component.html',
  styleUrls: ['./sellerreview.component.css']
})
export class SellerreviewComponent implements OnInit {

  @Input() seller: Seller;
  userReview:Review = { id:0,
                        customer:null,
                        rating:0,
                        message:"",
                        date:new Date()
                      };
  constructor() { }

  ngOnInit() {
  }

  submitReview(){
    alert(this.userReview.rating);
  }
}
