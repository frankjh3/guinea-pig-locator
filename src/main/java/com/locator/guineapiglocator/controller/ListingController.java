package com.locator.guineapiglocator.controller;

import com.locator.guineapiglocator.model.Listing;
import com.locator.guineapiglocator.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Rest Controller for updating listings
 */
@RestController
@RequestMapping("api/v1/listing")
public class ListingController {

    private final ListingService listingService;

    @Autowired
    public ListingController(ListingService listingService) {
        this.listingService = listingService;
    }

    @PostMapping
    public void addListing(@Valid @NonNull @RequestBody Listing listing) {
        System.out.println(listing);
        this.listingService.addListing(listing);
    }

    @PostMapping(path = "{id}")
    public void markAsAdopted(@PathVariable("id") int id) {
        this.listingService.markAllAdopted(id);
    }

    @GetMapping
    public List<Listing> getActiveListings() {
        return this.listingService.getActiveListings();
    }

    @GetMapping(path = "{id}")
    public Listing getListingByID(@PathVariable("id") int id) {
        return listingService.getListingByID(id);
    }

    @DeleteMapping(path = "{id}")
    public void deleteListing(@PathVariable("id") int id) {
        this.listingService.deleteListing(id);
    }

    @PutMapping(path = "{id}")
    public Listing updateListing(@PathVariable("id") int id, @Valid @NonNull @RequestBody Listing newListing) {
        return this.listingService.updateListing(id, newListing);
    }
}
