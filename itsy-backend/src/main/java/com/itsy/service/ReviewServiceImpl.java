package com.itsy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.itsy.model.Item;
import com.itsy.model.Review;
import com.itsy.model.Seller;

@Service	
public class ReviewServiceImpl implements ReviewService{

	@Override
	public List<Review> getReviewsByItem(Item item) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Review> getReviewsBySeller(Seller seller) {
		// TODO Auto-generated method stub
		return null;
	}
}
