package com.itsy.model;

import java.util.List;

public class Seller extends User {
	private List<Review> reviews;

	public Seller() {
		
	}
	
	public Seller(List<Review> reviews) {
		super();
		this.reviews = reviews;
	}
	

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
}
