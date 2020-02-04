import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item.class';
import { Seller } from '../model/seller.class';
import { SellerService } from './seller.service';
import { UrlService } from './url.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string;

  constructor(private http: HttpClient, private sellerService: SellerService, private urlService: UrlService) {
    this.url = this.urlService.getBackendURL() + '/item';
  }

  public getAllItemsBySeller(seller: Seller): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + '/seller/' + seller.id);
  }

  public getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }

  public getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(this.url + '/' + id);
  }

  public addItem(item: Item) {
    return this.http.post<Item>(this.url, item);
  }

  public updateItem(item: Item) {
    return this.http.put<Item>(this.url, item);
  }

  public deleteItem(id: number) {
    return this.http.delete<Item>(this.url + '/' + id);
  }

}
