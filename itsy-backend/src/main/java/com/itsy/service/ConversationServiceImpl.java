package com.itsy.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itsy.dao.ConversationDao;
import com.itsy.dao.MessageDao;
import com.itsy.model.Conversation;
import com.itsy.model.Customer;
import com.itsy.model.Message;
import com.itsy.model.Seller;
import com.itsy.model.User;

@Service
public class ConversationServiceImpl implements ConversationService {

	@Autowired
	private ConversationDao conversationDao;
	
	@Override
	public List<Message> getMessages(int id) {
		return null;
	}

	@Override
	public List<Conversation> getConversationsbyUser() {
		User u=new Customer();
		u.setId(1);
		if(u.getClass().equals(Customer.class)) {
			return conversationDao.findByCustomer((Customer)u);
		}
		if(u.getClass().equals(Seller.class)) {
			return conversationDao.findBySeller((Seller)u);
		}
		return null;
	}

	@Override
	public Conversation addConversation(Conversation conversation) {
		conversation.setCustomer(null);//set to 
		return conversationDao.save(conversation);
	}

}
