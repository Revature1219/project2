package com.itsy.model;

import java.util.List;

import org.jboss.logging.Messages;

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
public class Conversation {
//	id : int
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
//	customer : User
	@OneToOne
	private Customer customer;
//	seller : User
	@OneToOne
	private Seller seller;
//	messages : List<Message>
	@OneToMany // (fetch = FetchType.LAZY) //Might as well fetch all of these at once.
	private List<Messages> messages;
//	read: boolean
	private boolean read;
	
	public Conversation() {
		
	}

	public Conversation(int id, Customer customer, Seller seller, List<Messages> messages, boolean read) {
		super();
		this.id = id;
		this.customer = customer;
		this.seller = seller;
		this.messages = messages;
		this.read = read;
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

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	public List<Messages> getMessages() {
		return messages;
	}

	public void setMessages(List<Messages> messages) {
		this.messages = messages;
	}

	public boolean isRead() {
		return read;
	}

	public void setRead(boolean read) {
		this.read = read;
	}
}
