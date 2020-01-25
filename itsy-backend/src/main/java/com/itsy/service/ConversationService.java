package com.itsy.service;

import java.util.List;

import com.itsy.model.Conversation;
import com.itsy.model.Seller;

public interface ConversationService {
	
	public List<Conversation> getAllConversationBySeller(Seller seller);
	
}
