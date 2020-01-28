import { Component, HostBinding,ElementRef, ViewChild, OnInit, AfterViewChecked, } from '@angular/core';
import { Router }                 from '@angular/router';
import { Conversation } from '../model/conversation.class';
import { Message } from '../model/message.class';
import { MessagingService } from './messaging.service';

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
  conversations: Conversation[];
  /*conversations: Conversation[]=[{
                    id:1,
                    customer : "me",
                    seller : "him",
                    messages : [],
                    read: false
                    },
                    {
                      id:2,
                      customer : "me",
                      seller : "someoneelse",
                      messages : [{
                        id:5,
                        sentDate:new Date(),
                        originator:"someoneelse",
                        contents:"hello"
                      },{
                        id:6,
                        sentDate:new Date(),
                        originator:"someoneelse",
                        contents:"sup"
                      }],
                      read: false
                    }]*/
  output: string="begin";
  message: string="";
  showText = false;
  sending = false;

  constructor(private router: Router, private service:MessagingService) {}

  ngOnInit(){
    this.service.getConversations().subscribe(data=>{
      this.conversations=data;
    });
  }

ngAfterViewChecked() {      
    if(this.scrollDown){  
    this.scrollToBottom(); 
    this.scrollDown=false;
    }       
} 

scrollToBottom(): void {
    try {
        this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
    } catch(err) {}                 
}

  send() {
    this.sending = true;
    this.details = 'Sending Message...';
    var pushedMessage:Message={
      id:4,
      sentDate:new Date(),
      originator:{id:0,
                  name:"me",
                  password:"",
                  conversations:null},
      contents:this.message
    };
    this.conversations[this.currentConversation].messages.push(pushedMessage);
    this.message=""
    this.textArea.nativeElement.focus();
    this.scrollDown=true;
  }

  cancel() {
    this.showText=false;
    this.closePopup();
  }
  toggleContent(){
    this.showText=!this.showText;
    this.scrollDown=true;
  }
  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet

    this.router.navigate([{ outlets: { popup: null }}]);
  }
  showContent(){
    this.showText=true;
    this.output+="show"
  }
  dontShowContent(){
    this.showText=false;
    this.output+="fade"
  }
  changeConversation(index:number){
    this.currentConversation=index;
    this.scrollToBottom();
  }
}
