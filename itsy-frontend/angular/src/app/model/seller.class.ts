import { User } from './user.class';
import { Review } from './review.class';

export class Seller extends User {

	// @OneToMany(fetch = FetchType.LAZY)
	reviews: Review[];
}
