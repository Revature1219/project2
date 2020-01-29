package com.itsy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itsy.dao.CartDao;
import com.itsy.model.Cart;
import com.itsy.model.Seller;
import com.itsy.model.Status;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	CartDao cartDao;
	@Autowired
	Status status;

	// used for seller-pending-orders || history-order
	@Override
	public List<Cart> getCartsBySellerOrderByStatus(Seller seller) {
		return cartDao.findBySellerOrderByStatusAsc(seller);
	}

	@Override
	public Cart addCart(Cart cart) {
		return cartDao.save(cart);
	}

}
