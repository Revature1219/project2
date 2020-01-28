package com.itsy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.itsy.model.Review;
import com.itsy.service.ReviewService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ReviewController {
	@Autowired
	private ReviewService reviewService;
	@PostMapping("/review/seller")
	public void createSellerReview(@RequestBody Review review){
		
	}
}
