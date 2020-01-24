package com.itsy.model;

import java.util.List;

public class Item {
	private int id;
	private String name;
	private double price;
	private String details;
	private Seller seller;
	private List<Review> reviews;
	
	public Item() {
		
	}

	public Item(int id, String name, double price, String details, Seller seller, List<Review> reviews) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.details = details;
		this.seller = seller;
		this.reviews = reviews;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
}
