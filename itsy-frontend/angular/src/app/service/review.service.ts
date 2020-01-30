import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ItemReview } from '../model/itemReview.class';
import { SellerReview } from '../model/sellerReview.class';
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
  public getReviewsbyItem(item:Item): Observable<ItemReview[]>{
    return this.http.get<ItemReview[]>(this.url+"/item/"+item.id);
    
   }
   public getReviewsbySeller(seller:Seller): Observable<SellerReview[]>{
    return this.http.get<SellerReview[]>(this.url+"/seller/"+seller.id);
   }
   public addItemReview(itemReview:ItemReview): Observable<ItemReview>{
    return this.http.post<ItemReview>(this.url+"/item/", itemReview);
   }
   public addSellerReview(sellerReview:SellerReview): Observable<SellerReview>{
     console.log(sellerReview);
    return this.http.post<SellerReview>(this.url+"/seller/", sellerReview);
   }

}
