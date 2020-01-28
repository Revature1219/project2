import { Seller } from './seller.class';
import { Review } from './review.class';

export class Item {
    
    // private int id;
    id : number;
    // private String name;
    name : string;
    // private double price;
    price : number;
    // private String details;
    details : string;
    // private byte[] image;
    image : Uint8Array;
	// @OneToOne(fetch = FetchType.LAZY)
    // private Seller seller;
    seller : Seller;
	// @OneToMany(fetch = FetchType.LAZY)
    // private List<Review> reviews;
    reviews : Review[];
    
}
