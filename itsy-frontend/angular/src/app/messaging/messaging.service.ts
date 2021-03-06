import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Conversation } from '../model/conversation.class';
import { Message } from '../model/message.class';
import { User } from '../model/user.class';
import { Seller } from '../model/seller.class';
import { Customer } from '../model/customer.class';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9001/messages";
  }
  public getConversationsByCustomer(user:Customer): Observable<Conversation[]>{
    return this.http.get<Conversation[]>(this.url+"/customer/"+user.id);
   }
   public getConversationsBySeller(user:Seller): Observable<Conversation[]>{
    return this.http.get<Conversation[]>(this.url+"/seller/"+user.id);
   }
  public sendConversation(conversation:Conversation): Observable<Conversation>{
    return this.http.post<Conversation>(this.url,conversation);
  }
  public getMessages(conversation:Conversation): Observable<Message[]>{
    return this.http.get<Message[]>(this.url+"/"+conversation.id);
  }
  public sendMessage(message:Message): Observable<Message>{
    return this.http.post<Message>(this.url+"/message/",message);
  }
}
