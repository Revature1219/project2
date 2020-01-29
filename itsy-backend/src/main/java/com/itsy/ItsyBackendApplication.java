package com.itsy;

import java.util.ArrayList;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.itsy.model.Cart;
import com.itsy.model.Conversation;
import com.itsy.model.Item;
import com.itsy.model.Review;
import com.itsy.model.Seller;
import com.itsy.service.ItemServiceImpl;
import com.itsy.service.SellerServiceImpl;
import com.itsy.model.Customer;
import com.itsy.service.CustomerServiceImpl;

@SpringBootApplication
public class ItsyBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ItsyBackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner sellerDemoData(SellerServiceImpl sellerService, ItemServiceImpl itemService,
			CustomerServiceImpl customerService) {
		return args -> {
			System.out.println("Generating the Seller info..");
			Seller seller;
			int id = 1;

			seller = new Seller();
			seller.setName(id++ + "_namio");
			seller.setPassword("password");
			seller.setConversations(new ArrayList<Conversation>());
			seller.setReviews(new ArrayList<Review>());
			sellerService.addSeller(seller);
			seller = new Seller();
			seller.setName(id++ + "_namio");
			seller.setPassword("password");
			seller.setConversations(new ArrayList<Conversation>());
			seller.setReviews(new ArrayList<Review>());
			sellerService.addSeller(seller);
			seller = new Seller();
			seller.setName(id++ + "_namio");
			seller.setPassword("password");
			seller.setConversations(new ArrayList<Conversation>());
			seller.setReviews(new ArrayList<Review>());
			sellerService.addSeller(seller);

			System.out.println("Generating the Customer info...");
			Customer customer;
			int cid = 1;
			customer = new Customer();
			customer.setCarts(new ArrayList<Cart>());
			customer.setConversations(new ArrayList<Conversation>());
			customer.setName(cid++ + "customer");
			customer.setPassword("password");
			customerService.addCustomer(customer);
			customer = new Customer();
			customer.setCarts(new ArrayList<Cart>());
			customer.setConversations(new ArrayList<Conversation>());
			customer.setName(cid++ + "customer");
			customer.setPassword("password");
			customerService.addCustomer(customer);
			customer = new Customer();
			customer.setCarts(new ArrayList<Cart>());
			customer.setConversations(new ArrayList<Conversation>());
			customer.setName(cid++ + "customer");
			customer.setPassword("password");
			customerService.addCustomer(customer);

			System.out.println("Generating the Item info..");
			seller = sellerService.getAllSellers().get(0);
			Item item;
			id = 7;
//			byte[] image = { 0b00000000, 0b00000001, 0b00000001, 0b00000001 };

			item = new Item();
			item.setDetails("Details of item: " + (id));
			item.setName("Name" + (id));
			item.setPrice(id++);
			item.setSeller(seller);
			itemService.addItem(item);
			item = new Item();
			item.setDetails("Details of item: " + (id));
			item.setName("Name" + (id));
			item.setPrice(id++);
			item.setSeller(seller);
			itemService.addItem(item);
			item = new Item();
			item.setDetails("Details of item: " + (id));
			item.setName("Name" + (id));
			item.setPrice(id++);
			item.setSeller(seller);
			itemService.addItem(item);
			item = new Item();
			item.setDetails("Details of item: " + (id));
			item.setName("Name" + (id));
			item.setPrice(id++);
			item.setSeller(seller);
			itemService.addItem(item);
			item = new Item();
			item.setDetails("Details of item: " + (id));
			item.setName("Name" + (id));
			item.setPrice(id++);
			item.setSeller(seller);
			itemService.addItem(item);
		};
	}

}
