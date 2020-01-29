import { Injectable } from '@angular/core';
import { Item } from 'src/app/model/item.class';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Seller } from 'src/app/model/seller.class';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string;

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(this.url + '/' + id);
  }

  getItemByName(name: string): Observable<Item> {
    return this.http.get<Item>(this.url + '/name/' + name);
  }

  getItemsBySeller(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + '/seller/' + id);
  }

  constructor(private http: HttpClient) {
    this.url = "http://localhost:9001/item";
  }

}
