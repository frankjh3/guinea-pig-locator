package com.locator.guineapiglocator.dao;

import com.locator.guineapiglocator.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Integer> {
}
