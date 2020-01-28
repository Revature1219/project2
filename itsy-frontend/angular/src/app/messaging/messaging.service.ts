import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Conversation } from '../model/conversation.class';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9001/messages";
  }
  public getConversations(): Observable<Conversation[]>{
    return this.http.get<Conversation[]>(this.url);
   }
}
