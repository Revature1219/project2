import { Component, OnChanges, Input } from '@angular/core';
import { Seller } from 'src/app/model/seller.class';
import { SellerReview } from 'src/app/model/sellerReview.class';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-sellerreview',
  templateUrl: './sellerreview.component.html',
  styleUrls: ['./sellerreview.component.css']
})
export class SellerreviewComponent implements OnChanges {

  @Input() seller: Seller;
  reviews: SellerReview[];
  userReview:SellerReview = { id:0,
                        customer:null,
                        rating:0,
                        message:"",
                        date:new Date(),
                        seller:this.seller
                      };
  constructor(private reviewService: ReviewService) { }

  ngOnChanges() {
    this.reviewService.getReviewsbySeller(this.seller).subscribe(
            reviews => this.reviews = reviews
    );
  }

  submitReview(){
    alert(this.userReview.rating);
  }
}
