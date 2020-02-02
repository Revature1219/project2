import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Seller } from '../model/seller.class';
@Injectable({
  providedIn: 'root'
})
export class StartConversationService {

    // Observable string sources
    private startConversationSource = new Subject<Seller>();
  
    // Observable string streams
    startConversation$ = this.startConversationSource.asObservable();

    startConvo(seller :Seller){
      console.log("gothere")
      this.startConversationSource.next(seller);
      
    }
}
