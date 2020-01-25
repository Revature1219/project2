package com.itsy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.itsy.model.Item;
import com.itsy.model.Seller;
import com.itsy.service.ItemService;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
public class ItemController {
	
	@Autowired
	private ItemService sv;
	
	@GetMapping("/item")
	public List<Item> getAllItems() {
		return sv.getAllItems();
	}

	@GetMapping("/item/{seller}")
	public List<Item> getAllItemsBySeller(@PathVariable("seller") Seller seller) {
		return sv.getAllItemsBySeller(seller);
	}

	@GetMapping("/item/{id}")
	public Item getItemById(@PathVariable("id") int id) {
		return sv.getItemById(id);
	}

	@PostMapping("/item")
	public Item addItem(@RequestBody Item item) {
		return sv.addItem(item);
	}

	@PutMapping("/item")
	public Item updateItem(@RequestBody Item item) {
		return sv.updateItem(item);
	}

	@DeleteMapping("/item/{id}")
	public void deleteItem(@PathVariable("id") int id) {
		sv.deleteItem(id);
	}

}
