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
	
	@Autowired
	private MessageDao messageDao;
	
	@Override
	public List<Message> getMessages(Conversation conversation) {
		return messageDao.findByConversation(conversation);
	}

	@Override
	public List<Conversation> getConversationsbyUser() {
		User u=new Customer();
		u.setId(3);
		if(u.getClass().equals(Customer.class)) {
			System.out.println(u.getId());
			return conversationDao.findByCustomer((Customer)u);
		}
		if(u.getClass().equals(Seller.class)) {
			return conversationDao.findBySeller((Seller)u);
		}
		return null;
	}

	@Override
	public Conversation addConversation(Conversation conversation) {
		Customer u=new Customer();
		u.setId(3);
		conversation.setCustomer(u);
		return conversationDao.saveAndFlush(conversation);
	}
	@Override
	public Message addMessage(Message message) {
		User u=new Customer();
		u.setId(3);
		message.setOriginator(u);
		return messageDao.save(message);
	}
}
