package com.itsy.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Inheritance;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table
//@PrimaryKeyJoinColumn(name="id")
public class Seller extends Person {
	@OneToMany(fetch = FetchType.LAZY)
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
