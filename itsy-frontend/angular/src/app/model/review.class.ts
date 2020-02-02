import { Customer } from './customer.class';
import { Item } from './item.class';

export class Review {
    id: number;
    customer: Customer;
    rating: number;
    message: string;
    date:Date;
}
