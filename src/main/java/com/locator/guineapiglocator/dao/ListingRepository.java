package com.locator.guineapiglocator.dao;

import com.locator.guineapiglocator.model.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ListingRepository extends JpaRepository<Listing, Integer> {

    public List<Listing> findByIsActive(boolean isActive);
}
