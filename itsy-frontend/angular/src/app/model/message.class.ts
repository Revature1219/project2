import { User } from './user.class';
import { Conversation } from './conversation.class';

export class Message {
    
    // private int id;
    id : number;
    //  	@Temporal(value = TemporalType.TIMESTAMP)
    //     private Date sentDate;
    sentDate : Date;
    //     @OneToOne //(fetch = FetchType.LAZY) //keeping this eager because I'm paranoid. This will probably be ok to be Lazy, later.
    //     private User originator;
    originator : User;
    //     private String contents;
    contents : string;
    conversation : Conversation;

}
