package com.itsy.service;

import java.util.List;

import com.itsy.model.Cart;
import com.itsy.model.Seller;

public interface CartService {
	
	public List<Cart> getCartsBySeller(Seller seller);

}
