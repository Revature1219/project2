import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../model/seller.class';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private url: string;

  constructor(private http: HttpClient, private urlService: UrlService) {
    this.url = this.urlService.backendURL + '/seller';
  }

  public getSellerById(id: number): Observable<Seller> {
    return this.http.get<Seller>(this.url + '/' + id);
  }

}
