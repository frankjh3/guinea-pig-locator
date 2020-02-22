package com.locator.guineapiglocator.dao;

import com.locator.guineapiglocator.model.GuineaPig;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Implements basic CRUD operations by extending JpaRepository
 */
public interface GuineaPigRepository extends JpaRepository<GuineaPig, Integer> {

}
