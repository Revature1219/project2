import { Component, OnChanges,Input } from '@angular/core';
import { Item } from 'src/app/model/item.class';
import { ItemReview } from 'src/app/model/itemReview.class';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-itemreview',
  templateUrl: './itemreview.component.html',
  styleUrls: ['./itemreview.component.css']
})
export class ItemreviewComponent implements OnChanges {

  @Input() item: Item;
  reviews: ItemReview[];
  userReview:ItemReview = { id:0,
                        customer:null,
                        rating:0,
                        message:"",
                        date:new Date(),
                        item:this.item
                      };
  constructor(private reviewService: ReviewService) { }

  ngOnChanges() {
    this.item.image=null;
    this.reviewService.getReviewsbyItem(this.item).subscribe(
            reviews => this.reviews = reviews
    );
    this.userReview.item=this.item;
  }

  submitReview(){
    this.reviewService.addItemReview(this.userReview).subscribe();
  }
}
