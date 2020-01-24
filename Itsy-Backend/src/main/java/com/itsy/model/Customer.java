package com.itsy.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table
@PrimaryKeyJoinColumn(name="id")
public class Customer extends Person {
	@OneToMany(fetch = FetchType.LAZY)
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
