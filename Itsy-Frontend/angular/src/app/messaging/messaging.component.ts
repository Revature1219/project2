import { Component, HostBinding,ElementRef, ViewChild, } from '@angular/core';
import { Router }                 from '@angular/router';
import { Conversation } from '../model/conversation.class';
import { Message } from '../model/message.class';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent{

  @ViewChild('textArea',{static:false}) private textArea: ElementRef;
  details: string="";
  currentConversation=1;
  conversations: Conversation[]=[{
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
                    }]
  output: string="begin";
  message: string="";
  showText = false;
  sending = false;

  constructor(private router: Router) {}

  send() {
    this.sending = true;
    this.details = 'Sending Message...';
    var pushedMessage:Message={
      id:4,
      sentDate:new Date(),
      originator:"me",
      contents:this.message
    };
    this.conversations[this.currentConversation].messages.push(pushedMessage);
    this.message=""
    this.textArea.nativeElement.focus();
  }

  cancel() {
    this.showText=false;
    this.closePopup();
  }
  toggleContent(){
    this.showText=!this.showText;
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
  }
}
