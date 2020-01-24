package com.itsy.model;

import java.util.List;

public class Customer extends User {
	private List<Cart> carts;

	public Customer(List<Cart> carts) {
		super();
		this.carts = carts;
	}
	
	public Customer() {
		
	}

	public List<Cart> getCarts() {
		return carts;
	}

	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}
}
