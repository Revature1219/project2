package com.itsy.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
public class Review {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	@ManyToOne(fetch = FetchType.LAZY)
	private Customer customer;
	private double rating;
	private String message;
	@ManyToOne(optional = true, fetch = FetchType.LAZY)
	private Seller seller;
	@ManyToOne(optional = true, fetch = FetchType.LAZY)
	private Item item;
}
