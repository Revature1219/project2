package com.itsy.model;

import java.util.Map;

public class Cart {
	private int id;
	private Map<Item, Integer> items;
	private Seller seller;
	private Status status;
	
	public Cart(int id, Map<Item, Integer> items, Seller seller, Status status) {
		super();
		this.id = id;
		this.items = items;
		this.seller = seller;
		this.status = status;
	}
	
	public Cart() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Map<Item, Integer> getItems() {
		return items;
	}

	public void setItems(Map<Item, Integer> items) {
		this.items = items;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
}
