import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../model/seller.class';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:9001/seller';
  }

  public getSellerById(id: number): Observable<Seller> {
    return this.http.get<Seller>(this.url + '/' + id);
  }

}
