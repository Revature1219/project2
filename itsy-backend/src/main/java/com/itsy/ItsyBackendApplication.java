package com.itsy;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.itsy.model.Cart;
import com.itsy.model.Conversation;
import com.itsy.model.Customer;
import com.itsy.model.Item;
import com.itsy.model.Message;
import com.itsy.model.Seller;
import com.itsy.service.CartServiceImpl;
import com.itsy.service.ConversationServiceImpl;
import com.itsy.service.CustomerServiceImpl;
import com.itsy.service.ItemServiceImpl;
import com.itsy.service.SellerServiceImpl;

@SpringBootApplication
public class ItsyBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ItsyBackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner sellerDemoData(SellerServiceImpl sellerService, ItemServiceImpl itemService,
			CustomerServiceImpl customerService, CartServiceImpl cartService,ConversationServiceImpl conversationService) {
		return args -> {
			System.out.println("Generating the Seller info..");
			Seller seller;
			int id = 1;

			seller = new Seller();
			seller.setName(id++ + "_namio");
			seller.setPassword("password");
			sellerService.addSeller(seller);
			seller = new Seller();
			seller.setName(id++ + "_namio");
			seller.setPassword("password");
			sellerService.addSeller(seller);
			
			System.out.println("Generating the Customer info...");
			Customer customer;
			int cid = 1;
			customer = new Customer();
			customer.setConversations(new ArrayList<Conversation>());
			customer.setName(cid++ + "customer");
			customer.setPassword("password");
			customerService.addCustomer(customer);			
		
			seller = new Seller();
			seller.setName(id++ + "_namio");
			seller.setPassword("password");
			sellerService.addSeller(seller);
			seller = new Seller();
			seller.setName(id++ + "_namio");
			seller.setPassword("password");
			sellerService.addSeller(seller);
			
			Item item;
			item= new Item();
			item.setDetails("fjfj");
			item.setName("ff");
			item.setPrice(4);
			item.setSeller(seller);
			itemService.addItem(item);
			
			Conversation c=new Conversation();
			customer=new Customer();
			customer.setId(3);
			c.setCustomer(customer);
			c.setRead(true);
			System.out.println(c.getCustomer().getId());
			c.setSeller(seller);
			conversationService.addConversation(c);
			
			Message m = new Message();
			m.setContents("fff");
			m.setConversation(c);
			m.setOriginator(customer);
			m.setSentDate(new Date());
			conversationService.addMessage(m);
		};
	}

}
