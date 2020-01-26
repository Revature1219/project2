import { Customer } from './customer.class';
import { Seller } from './seller.class';
import { Message } from './message.class';

export class Conversation {
    id : number;
    customer : String;
    seller : String;
    messages : Message[];
    read: boolean;
}
