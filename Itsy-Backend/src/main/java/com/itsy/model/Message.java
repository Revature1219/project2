package com.itsy.model;

import java.util.Date;

public class Message {
	private int id;
	private Date sentDate;
	private User originator;
	private String contents;
	
	public Message() {
		
	}
	
	public Message(int id, Date sentDate, User originator, String contents) {
		super();
		this.id = id;
		this.sentDate = sentDate;
		this.originator = originator;
		this.contents = contents;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getSentDate() {
		return sentDate;
	}

	public void setSentDate(Date sentDate) {
		this.sentDate = sentDate;
	}

	public User getOriginator() {
		return originator;
	}

	public void setOriginator(User originator) {
		this.originator = originator;
	}

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}
}
