package com.itsy.model;

public class Review {
	private int id;
	private Customer customer;
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
