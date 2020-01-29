import { Injectable } from '@angular/core';
import { Seller } from 'src/app/model/seller.class';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private url: string;
  private seller: Seller;

  getSeller(name: string): Observable<Seller>{
    return this.http.get<Seller>(this.url + '/'+name);
  }
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:9001/seller";
  }
}
