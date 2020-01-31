package com.itsy;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.itsy.model.Cart;
import com.itsy.model.Conversation;
import com.itsy.model.Item;
import com.itsy.model.Message;
import com.itsy.model.Review;
import com.itsy.model.Seller;
import com.itsy.model.User;
import com.itsy.service.ConversationServiceImpl;
import com.itsy.service.ReviewServiceImpl;
import com.itsy.service.SellerServiceImpl;
import com.itsy.model.Customer;

@SpringBootApplication
public class ItsyBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ItsyBackendApplication.class, args);
	}
	

	@Bean
	public CommandLineRunner sellerDemoData(ConversationServiceImpl conversationService) {
		return args -> {
			System.out.println("Generating the Customer info...");
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
			User u=new Customer();
			u.setId(1);
			c1.setCustomer((Customer)u);
			
			conversationService.addConversation(c1);
		};
	}

}
