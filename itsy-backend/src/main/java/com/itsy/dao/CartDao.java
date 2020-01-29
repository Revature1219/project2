package com.itsy.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itsy.model.Cart;
import com.itsy.model.Seller;
import com.itsy.model.Status;

@Repository
public interface CartDao extends JpaRepository<Cart, Integer> {

	public List<Cart> findBySeller(Seller seller);

	public List<Cart> findByStatus(Status status);
	
}
