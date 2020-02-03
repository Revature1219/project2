import { Component, OnChanges,Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.class';
import { ItemReview } from 'src/app/model/itemReview.class';
import { ReviewService } from 'src/app/service/review.service';
import { SessionService } from 'src/app/service/session.service';
import { Customer } from 'src/app/model/customer.class';

@Component({
  selector: 'app-itemreview',
  templateUrl: './itemreview.component.html',
  styleUrls: ['./itemreview.component.css']
})
export class ItemreviewComponent implements OnChanges,OnInit {

  @Input() item: Item;
  reviews: ItemReview[];
  customer:Customer;
  showReview:boolean = true;
  userReview:ItemReview = { id:0,
                        customer:null,
                        rating:0,
                        message:"",
                        date:new Date(),
                        item:this.item
                      };
  errormessage:String;
  constructor(private reviewService: ReviewService, private sessionService: SessionService) { }

  ngOnInit(){
    this.customer=this.sessionService.getCustomer();
    this.userReview.customer=this.customer;
  }
  ngOnChanges() {
    if(this.item!=null){
    this.reviewService.getReviewsbyItem(this.item).subscribe(
            reviews => {this.reviews = reviews
            this.showReview=this.showUserReview();
          }
    );
    this.userReview.item=this.item;
        }
    
  }
  showUserReview(): boolean{
    if(this.customer == null){
      return false
    }
    let review:ItemReview
    for(let i=0; i<this.reviews.length; i++){
      if(this.reviews[i].customer.id==this.customer.id){
        console.log("dupe"+i)
        return false;
      }
    }
    console.log("show")
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
      this.reviewService.addItemReview(this.userReview).subscribe();
      window.location.reload(); 
    }
  }
}
