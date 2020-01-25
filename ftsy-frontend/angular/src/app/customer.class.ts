import { User } from './user.class';
import { Cart } from './cart.class';

export class Customer extends User {
    
    // private List<Cart> carts;
    carts : Cart[];
}
