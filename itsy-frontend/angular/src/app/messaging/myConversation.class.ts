import { Conversation } from '../model/conversation.class';
import { Message } from '../model/message.class';

export class MyConversation extends Conversation {

    // private List<Cart> carts;
    messages: Message[];
}
