package com.itsy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itsy.dao.MessageDao;
import com.itsy.model.Message;

@Service
public class MessageServiceImpl implements MessageService {

	@Autowired
	private MessageDao messageDao;
	@Override
	public void addMessage(Message m) {
		m.setOriginator(null);//update to get correct user.
		messageDao.save(m);
	}

}
