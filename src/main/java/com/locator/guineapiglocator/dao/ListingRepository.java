package com.locator.guineapiglocator.dao;

import com.locator.guineapiglocator.model.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListingRepository extends JpaRepository<Listing, Integer> {
}
