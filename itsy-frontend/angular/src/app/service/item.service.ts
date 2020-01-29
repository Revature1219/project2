import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item.class';
import { Seller } from '../model/seller.class';
import { SellerService } from './seller.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string;
  // private seller: Seller;

  constructor(private http: HttpClient, private sellerService: SellerService) {
    this.url = 'http://localhost:9001/item';
  }

  public getAllItemsBySeller(seller: Seller): Observable<Item[]> {
    // this.sellerService.getSellerById(id).subscribe(data => {
    //   this.seller = data;
    //   this.seller.id = id;
    // });
    // return this.http.get<Item[]>(this.url + '/seller/' + seller.id);
    return this.http.get<Item[]>(this.url + '/seller/' + 1);
  }

  public getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(this.url + '/' + id);
  }

  public updateItem(item: Item) {
    return this.http.put<Item>(this.url, item);
  }

  public deleteItem(id: number) {
    return this.http.delete<Item>(this.url + '/' + id);
  }

}
