package com.itsy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.itsy.model.Conversation;
import com.itsy.model.Customer;
import com.itsy.model.Message;
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
		return conversationService.getConversationsbyUser();
	}
	@PostMapping("/messages")
	public Conversation addConversation(@RequestBody Conversation conversation){
		System.out.println(conversation.getSeller().getId());
		return conversationService.addConversation(conversation);
	}
	@GetMapping("/messages/{conversation}")
	public List<Message> getMessages(@PathVariable("conversation") Conversation conversation ){
		return conversationService.getMessages(conversation);
	}
	@PostMapping("/messages/message")
	public Message addMessage(@RequestBody Message message){
		return conversationService.addMessage(message);
	}
}
