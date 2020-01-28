package com.itsy.service;

import java.util.List;

import com.itsy.model.Conversation;
import com.itsy.model.Customer;
import com.itsy.model.Message;
import com.itsy.model.Seller;
import com.itsy.model.User;

public interface ConversationService {
	public List<Message> getMessages(int id);
	public List<Conversation> getConversationsbyUser(User u);
}
