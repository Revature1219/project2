import { User } from './user.class';

export class Message {
    
    // private int id;
    id : number;
    //  	@Temporal(value = TemporalType.TIMESTAMP)
    //     private Date sentDate;
    sentDate : Date;
    //     @OneToOne //(fetch = FetchType.LAZY) //keeping this eager because I'm paranoid. This will probably be ok to be Lazy, later.
    //     private User originator;
    originator : String;
    //     private String contents;
    contents : string;

}
