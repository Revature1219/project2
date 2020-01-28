import { Customer } from './customer.class';
import { Item } from './item.class';
import { Seller } from './seller.class';

export class Review {  
	id : number;
    customer : Customer;
    rating : number;
    message : string;
    seller: Seller;
    item: Item;
    date : Date;
}
