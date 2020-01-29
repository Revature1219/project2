package com.itsy.service;

import java.util.List;

import com.itsy.model.Cart;
import com.itsy.model.Seller;
import com.itsy.model.Status;

public interface CartService {
	
	public List<Cart> getCartsBySeller(Seller seller);
	
	public List<Cart> getCartsByStatus(Status status);

}
