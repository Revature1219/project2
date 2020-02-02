import { Customer } from './customer.class';
import { Seller } from './seller.class';
import { Message } from './message.class';
import { User } from './user.class';

export class Conversation {
    id : number;
    customer : Customer;
    seller : Seller;
    read: boolean;
}
