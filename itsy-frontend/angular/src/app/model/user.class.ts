import { Conversation } from './conversation.class';

export class User {
	id: number;
	name: string;
	password: string;
	conversations: Conversation[];
}
