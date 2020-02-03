import { Component, OnInit,Input } from '@angular/core';
import { Item } from '../model/item.class';
import { Review } from '../model/review.class';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review;
  @Input() itemName: String;
  
  constructor() { }

  ngOnInit() {
  }

}
