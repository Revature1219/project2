package com.itsy.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.itsy.model.Conversation;
import com.itsy.model.Customer;
import com.itsy.model.Message;
import com.itsy.model.User;

@Service
public class ConversationServiceImpl implements ConversationService {

	@Override
	public List<Message> getMessages(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Conversation> getConversationsbyUser(User u) {
		List<Conversation> l = new ArrayList<Conversation>();
		Conversation c1=new Conversation();
		List<Message> m = new ArrayList<Message>();
		Message m1=new Message();
		m1.setContents("hello world");
		User user = new Customer();
		user.setName("test");
		m1.setOriginator(user);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		m.add(m1);
		c1.setMessages(m);
		l.add(c1);
		l.add(c1);
		l.add(c1);
		l.add(c1);

		return l;
	}

}
