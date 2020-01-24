package com.itsy.main;

import java.util.ArrayList;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.itsy.model.Review;
import com.itsy.model.Seller;

public class Main {

	public static void main(String...args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("itsyBeans.xml");
		SessionFactory factory = (SessionFactory) context.getBean("sessionFactory");
		
		Session session = factory.openSession();
		Transaction transaction = session.beginTransaction();
		Seller se = (Seller) session.get(Seller.class, 10);
		
//		Seller seller = new Seller();
//		seller.setName("Austin");
//		seller.setPassword("rabbit");
//		seller.setReviews(new ArrayList<Review>());
//		
//		session.save(seller);
		System.out.println(se.getName());
		
		transaction.commit();
		session.close();
		factory.close();
	}
}
