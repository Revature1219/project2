package com.itsy.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table
public class Conversation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	@ManyToOne
	private Customer customer;
	@ManyToOne
	private Seller seller;
	private boolean read;
	@OneToMany
	private List<Message> messages;
}
