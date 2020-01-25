package com.itsy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itsy.dao.ConversationDao;
import com.itsy.model.Conversation;
import com.itsy.model.Seller;

@Service
public class ConversationServiceImpl implements ConversationService {
	
	@Autowired
	private ConversationDao smsDao;
	
	@Override
	public List<Conversation> getAllConversationBySeller(Seller seller) {
		return smsDao.findSmsBySeller(seller);
	}

}
