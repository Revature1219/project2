package com.itsy.model;

import java.util.Map;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MapKeyColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	@ElementCollection
	private Map<Item, Integer> items;
	@OneToOne(fetch = FetchType.LAZY)
	private Seller seller;
	@OneToOne(fetch = FetchType.LAZY)
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
