import { Component, HostBinding,ElementRef, ViewChild, OnInit, AfterViewChecked, } from '@angular/core';
import { Router }                 from '@angular/router';
import { Conversation } from '../model/conversation.class';
import { Message } from '../model/message.class';
import { MessagingService } from './messaging.service';
import { MyConversation } from './myConversation.class';
import { Subscription } from 'rxjs';
import { StartConversationService } from './start-conversation.service';
import { Seller } from '../model/seller.class';
import { SessionService } from '../service/session.service';
import { User } from '../model/user.class';
import { Customer } from '../model/customer.class';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit,AfterViewChecked{

  @ViewChild('textArea',{static:false}) private textArea: ElementRef;
  @ViewChild('scrollMe',{static:false}) private scrollMe: ElementRef;
  details: string="";
  scrollDown:boolean=false;
  currentConversation=0;
  conversations: MyConversation[];
  messages: Message[][];
  subscription: Subscription;
  output: string="begin";
  message: string="";
  user:User;
  scratchSeller:Seller;
  refreshTimer;
  isCustomer =true;
  showText = false;
  sending = false;
  constructor(private router: Router, private service:MessagingService, private startConvoService:StartConversationService, private sessionService:SessionService) {
    //code for start conversation button
    this.subscription=startConvoService.startConversation$.subscribe(seller=>{
        this.scratchSeller=seller
        this.getConversations(true);  
        
      }
    )
  }

  postButton(seller:Seller){
    let id=seller.id;
    let customer=this.sessionService.getCustomer();
    if(customer == null){return;}
    
    let conversation:MyConversation;
    let i = 0;
    for(i=0; i< this.conversations.length;i++){
      conversation=this.conversations[i];
      if(conversation.seller.id==id){
        this.currentConversation=i
        this.showText=true;
        return;
      }
    }
    conversation={id:0,
                  seller:seller,
                  customer:customer,
                  read:false,
                  messages:[]}
    this.conversations.push(conversation);
    this.showText=true;
    this.currentConversation=i;//end of array.
  }
  ngOnInit(){
    
    
  }

ngAfterViewChecked() {      
    if(this.scrollDown){  
    this.scrollToBottom(); 
    this.scrollDown=false;
    }       
} 
isUser(user:User): boolean{
  if(user.id==this.user.id){
  return true;
  }
  else{return false;}
}
scrollToBottom(): void {
    try {
        this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
    } catch(err) {}                 
}

  send() {
    this.sending = true;
    this.details = 'Sending Message...';
    this.message=this.message.trim()
    if(this.message.length<1 || this.message.length>255){
      this.textArea.nativeElement.focus();
      this.scrollDown=true;
      return;
    }
    var pushedMessage:Message={
      id:4,
      sentDate:new Date(),
      originator:this.user,
      contents:this.message,
      conversation:{id:this.conversations[this.currentConversation].id,
                    seller:null,
                    customer:null,
                  read:null}
    };

    this.conversations[this.currentConversation].messages.push(pushedMessage);
    if(this.conversations[this.currentConversation].messages.length==1){
      this.service.sendConversation(this.conversations[this.currentConversation]).subscribe(data =>{
        pushedMessage.conversation.id=data.id
        this.conversations[this.currentConversation].id=data.id;
        this.service.sendMessage(pushedMessage).subscribe();
        this.refreshTimer =setTimeout(this.getConversations,10000,false)  
      }
      )
    }
    else{
      this.service.sendMessage(pushedMessage).subscribe();
    }
    this.message=""
    this.textArea.nativeElement.focus();
    this.scrollDown=true;
  }

  cancel() {
    this.showText=false;
  }
  toggleContent(){
    if(this.showText==false){
      this.showText=this.getConversations(false);
    }
    else{
      this.showText=false;
      clearTimeout(this.refreshTimer)
    }
    
    this.scrollDown=true;
  }
  getConversations(postButton:boolean):boolean{
    var user:User=this.sessionService.getCustomer();
    if(user!=null){
      this.isCustomer=true;
      this.user=user;
      this.service.getConversationsByCustomer(<Customer>user).subscribe(data=>{
        this.conversations=<MyConversation[]>data;
        if(postButton){
          this.postButton(this.scratchSeller);
        }
        if(this.conversations.length>0){
          this.service.getMessages(this.conversations[this.currentConversation]).subscribe(data=>{
            this.conversations[this.currentConversation].messages=data;
            this.scrollDown=true;
            this.refreshTimer =setTimeout(this.getConversations.bind(this),10000,false)
          });
          
        }
      });
      
      return true;
    }
    else{
      user=this.sessionService.getSeller();
      if(user!=null){
        this.isCustomer=false;
        this.user=user;
        this.service.getConversationsBySeller(<Seller>user).subscribe(data=>{
          this.conversations=<MyConversation[]>data;
          if(this.conversations.length>0){
            this.service.getMessages(this.conversations[this.currentConversation]).subscribe(data=>{
              this.conversations[this.currentConversation].messages=data;    
              this.scrollDown=true; 
              this.refreshTimer=setTimeout(this.getConversations.bind(this),10000,false)        
            });
            
          }
        });
        
        return true;
      }
    }
    return false;
  }
  closePopup() {

    this.router.navigate([{ outlets: { popup: null }}]);
  }
  changeConversation(index:number){
    this.currentConversation=index;
    this.service.getMessages(this.conversations[this.currentConversation]).subscribe(data=>{
      this.conversations[this.currentConversation].messages=data;
      this.scrollDown=true;
    });
    this.scrollToBottom();
  }
}
