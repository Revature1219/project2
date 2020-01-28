package com.itsy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itsy.dao.ItemDao;
import com.itsy.model.Item;
import com.itsy.model.Seller;

@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	private ItemDao itemDao;

	@Override
	public List<Item> getAllItems() {
		return itemDao.findAll();
	}

	@Override
	public List<Item> getAllItemsBySeller(Seller seller) {
		return itemDao.findBySeller(seller);
	}

	@Override
	public Item getItemById(int id) {
		return itemDao.findById(id).get();
	}

	@Override
	public Item addItem(Item item) {
		return itemDao.save(item);
	}

	@Override
	public Item updateItem(Item item) {
		return itemDao.save(item);
	}

	@Override
	public void deleteItem(int id) {
		itemDao.deleteById(id);
	}

}
