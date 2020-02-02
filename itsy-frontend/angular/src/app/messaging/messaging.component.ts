import { Component, HostBinding,ElementRef, ViewChild, OnInit, AfterViewChecked, } from '@angular/core';
import { Router }                 from '@angular/router';
import { Conversation } from '../model/conversation.class';
import { Message } from '../model/message.class';
import { MessagingService } from './messaging.service';
import { MyConversation } from './myConversation.class';
import { Subscription } from 'rxjs';
import { StartConversationService } from './start-conversation.service';
import { Seller } from '../model/seller.class';

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
  showText = false;
  sending = false;

  constructor(private router: Router, private service:MessagingService, private startConvoService:StartConversationService) {
    //code for start conversation button
    this.subscription=startConvoService.startConversation$.subscribe(seller=>{
        let id=seller.id;
        console.log(id);
        let conversation:MyConversation;
        let i = 0;
        for(i=0; i< this.conversations.length;i++){
          conversation=this.conversations[i];
          console.log(conversation.seller.id+"   "+id)
          if(conversation.seller.id==id){
            console.log("found dupe");
            this.currentConversation=i
            this.showText=true;
            return;
          }
        }
        conversation={id:0,
                      seller:seller,
                      customer:null,//will pull current user server side
                      read:false,
                      messages:[]}
        this.conversations.push(conversation);
        this.showText=true;
        this.currentConversation=i;//end of array.
        console.log(this.conversations[this.currentConversation]);
      }
    )
  }

  ngOnInit(){
    this.service.getConversations().subscribe(data=>{
      this.conversations=<MyConversation[]>data;
      if(this.conversations.length>0){
        this.service.getMessages(this.conversations[this.currentConversation]).subscribe(data=>{
          this.conversations[this.currentConversation].messages=data;
        });
      }
    });
    
  }

ngAfterViewChecked() {      
    if(this.scrollDown){  
    this.scrollToBottom(); 
    this.scrollDown=false;
    }       
} 
isUser(): boolean{
  return true;
}
isntUser(): boolean{
  return false;
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
      originator:{id:0,
                  name:"me",
                  password:""},
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
        this.service.sendMessage(pushedMessage).subscribe(data =>{console.log(data)});
      }
      )
    }
    else{
      this.service.sendMessage(pushedMessage).subscribe(data =>{console.log(data)});
    }
    this.message=""
    this.textArea.nativeElement.focus();
    this.scrollDown=true;
  }

  cancel() {
    this.showText=false;
  }
  toggleContent(){
    this.showText=!this.showText;
    this.scrollDown=true;
  }
  closePopup() {

    this.router.navigate([{ outlets: { popup: null }}]);
  }
  changeConversation(index:number){
    this.currentConversation=index;
    this.service.getMessages(this.conversations[this.currentConversation]).subscribe(data=>{
      this.conversations[this.currentConversation].messages=data;
    });
    this.scrollToBottom();
  }
}
