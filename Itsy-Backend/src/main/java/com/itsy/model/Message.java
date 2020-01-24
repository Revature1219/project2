package com.itsy.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
//	@Temporal(value = TemporalType.TIMESTAMP)
	private Date sentDate;
	@OneToOne //(fetch = FetchType.LAZY) //keeping this eager because I'm paranoid. This will probably be ok to be Lazy, later.
	private Person originator;
	private String contents;
	
	public Message() {
		
	}
	
	public Message(int id, Date sentDate, Person originator, String contents) {
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

	public Person getOriginator() {
		return originator;
	}

	public void setOriginator(Person originator) {
		this.originator = originator;
	}

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}
}
