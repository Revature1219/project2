package com.itsy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itsy.dao.CartDao;
import com.itsy.model.Cart;
import com.itsy.model.Seller;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	CartDao cartDao;

	@Override
	public List<Cart> getCartsBySeller(Seller seller) {
		return cartDao.findBySeller(seller);
	}

}
