import { Injectable } from '@angular/core';
import {  HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Conversation } from '../model/conversation.class';
import { Message } from '../model/message.class';

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
  public sendConversation(conversation:Conversation): Observable<Conversation>{
    return this.http.post<Conversation>(this.url,conversation);
  }
  public getMessages(conversation:Conversation): Observable<Message[]>{
    return this.http.get<Message[]>(this.url+"/"+conversation.id);
  }
  public sendMessage(message:Message): Observable<Message>{
    console.log(message);
    return this.http.post<Message>(this.url+"/message/",message);
  }
}
