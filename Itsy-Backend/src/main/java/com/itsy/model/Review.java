package com.itsy.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	@OneToOne(fetch = FetchType.LAZY)
	private Customer customer;
	@OneToOne(fetch = FetchType.LAZY)
	private Item item;
	private double rating;
	private String message;

	public Review() {
		
	}
	
	public Review(int id, Customer customer, Item item, double rating, String message) {
		super();
		this.id = id;
		this.customer = customer;
		this.item = item;
		this.rating = rating;
		this.message = message;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
