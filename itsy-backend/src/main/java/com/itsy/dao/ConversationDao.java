package com.itsy.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.itsy.model.Conversation;

@Repository
public interface ConversationDao extends JpaRepository<Conversation, Integer> {

}
