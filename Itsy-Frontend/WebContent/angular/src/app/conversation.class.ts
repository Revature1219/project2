import { Customer } from './customer.class';
import { Seller } from './seller.class';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export class Conversation {
    id : number;
    customer : Customer;
    seller : Seller;
    messages : Message[];
    read: boolean;
}
