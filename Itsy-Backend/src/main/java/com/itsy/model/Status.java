package com.itsy.model;

import java.util.Date;

public class Status {
	private Date addedToCart;
	private Date ordered;
	private Date shipped;
	
	public Status() {
		
	}

	public Status(Date addedToCart, Date ordered, Date shipped) {
		super();
		this.addedToCart = addedToCart;
		this.ordered = ordered;
		this.shipped = shipped;
	}

	public Date getAddedToCart() {
		return addedToCart;
	}

	public void setAddedToCart(Date addedToCart) {
		this.addedToCart = addedToCart;
	}

	public Date getOrdered() {
		return ordered;
	}

	public void setOrdered(Date ordered) {
		this.ordered = ordered;
	}

	public Date getShipped() {
		return shipped;
	}

	public void setShipped(Date shipped) {
		this.shipped = shipped;
	}
	
	//TODO Add a "meaningful" return from this as to what the actual status is based on the dates that are and are not null.
}
