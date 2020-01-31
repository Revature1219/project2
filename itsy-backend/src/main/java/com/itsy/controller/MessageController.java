package com.itsy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itsy.model.Conversation;
import com.itsy.model.Customer;
import com.itsy.model.Seller;
import com.itsy.model.User;
import com.itsy.service.ConversationService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MessageController {
	@Autowired
	private ConversationService conversationService;
	@GetMapping("/messages")
	public List<Conversation> getConversationsbyUser(){
		return conversationService.getConversationsbyUser();//need to get sessions user
	}
	@PostMapping("/messages")
	public Conversation addConversation(Conversation c){		
		return conversationService.addConversation(c);
	}

}
