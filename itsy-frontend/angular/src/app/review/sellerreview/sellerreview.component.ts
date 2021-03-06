import { Component, OnChanges, Input } from '@angular/core';
import { Seller } from 'src/app/model/seller.class';
import { SellerReview } from 'src/app/model/sellerReview.class';
import { ReviewService } from 'src/app/service/review.service';
import { SessionService } from 'src/app/service/session.service';
import { Customer } from 'src/app/model/customer.class';

@Component({
  selector: 'app-sellerreview',
  templateUrl: './sellerreview.component.html',
  styleUrls: ['./sellerreview.component.css']
})
export class SellerreviewComponent implements OnChanges {

  @Input() seller: Seller;
  errormessage:String;
  reviews: SellerReview[];
  customer:Customer;
  showReview = true;
  userReview:SellerReview = { id:0,
                        customer:null,
                        rating:0,
                        message:"",
                        date:new Date(),
                        seller:this.seller
                      };
  constructor(private reviewService: ReviewService, private sessionService: SessionService) { }

  ngOnInit(){
    this.customer=this.sessionService.getCustomer();
    this.userReview.customer=this.customer;
  }
  ngOnChanges() {
    if(this.seller!=null){
    this.reviewService.getReviewsbySeller(this.seller).subscribe(
            reviews => {this.reviews = reviews
              this.showReview=this.showUserReview();
            }
    );
    this.userReview.seller=this.seller;
          }
  }
  showUserReview(): boolean{
    if(this.customer == null){
      return false
    }
    let review:SellerReview
    for(let i=0; i<this.reviews.length; i++){
      if(this.reviews[i].customer.id==this.customer.id){
        return false;
      }
    }
    return true;
  }
  submitReview(){
    this.userReview.date=new Date();
    this.userReview.message=this.userReview.message.trim();
    if(this.userReview.message.length<=0){
        this.errormessage="Please enter a review."
    }
    else if(this.userReview.message.length>=255){
        this.errormessage="Review too long. Max characters is 255."
    }
    else if(this.userReview.rating<=0){
      this.errormessage="Please enter a rating."
    }
    else if(this.userReview.rating>5){
      this.errormessage="Invalid rating."
    }
    else{
      this.errormessage="";
      console.log(this.userReview);
      this.reviewService.addSellerReview(this.userReview).subscribe();
      window.location.reload();
    }
  }
}
