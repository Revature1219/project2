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

	@Override
	public List<Cart> getCartsBySeller(Seller seller) {
		return cartDao.findBySeller(seller);
	}

	@Override
	public List<Cart> getCartsByStatus(Status status) {
		return cartDao.findByStatus(status);
	}

}
