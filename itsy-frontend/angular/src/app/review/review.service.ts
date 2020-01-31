import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Review } from '../model/review.class';
import { Item } from '../model/item.class';
import { Seller } from '../model/seller.class';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9001/reviews";
  }
  public getReviewsbyItem(item:Item): Observable<Review[]>{
    return this.http.get<Review[]>(this.url);
   }
   public getReviewsbySeller(seller:Seller): Observable<Review[]>{
    return this.http.get<Review[]>(this.url);
   }
}
