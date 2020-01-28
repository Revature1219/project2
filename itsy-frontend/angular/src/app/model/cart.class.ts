import { Item } from './item.class';
import { Seller } from './seller.class';
import { Status } from './status.class';

export class Cart {

    // private int id;
    id: number;
    // @ElementCollection
    // private Map<Item, Integer> items;
    items: { item: Item, quantity: number }[];
    // @OneToOne(fetch = FetchType.LAZY)
    // private Seller seller;
    seller: Seller;
    // @OneToOne(fetch = FetchType.LAZY)
    // private Status status;
    status: Status;
}
