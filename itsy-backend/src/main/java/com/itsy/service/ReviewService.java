package com.itsy.service;

import java.util.List;

import com.itsy.model.Item;
import com.itsy.model.Review;
import com.itsy.model.Seller;

public interface ReviewService {
	List<Review> getReviewsByItem(Item item);
	List<Review> getReviewsBySeller(Seller seller);
}
