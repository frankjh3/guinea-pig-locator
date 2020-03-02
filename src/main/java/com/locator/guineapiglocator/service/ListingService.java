package com.locator.guineapiglocator.service;

import com.locator.guineapiglocator.dao.ListingRepository;
import com.locator.guineapiglocator.model.GuineaPig;
import com.locator.guineapiglocator.model.Listing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ListingService {

    private final ListingRepository listingRepository;
    private final LocationService locationService;

    @Autowired
    public ListingService(ListingRepository listingRepository, LocationService locationService) {
        this.listingRepository = listingRepository;
        this.locationService = locationService;
    }

    public Listing addListing(Listing listing) {
        listing.setTimeListed(LocalDateTime.now());
        listing.setActive(true);
        for(GuineaPig guineaPig : listing.getGuineaPigs()) {
            guineaPig.setListing(listing);
            guineaPig.setId(null);
            guineaPig.setAdopted(false);
        }
        return listingRepository.save(listing);
    }

    public List<Listing> getAllListings() {
        return listingRepository.findAll();
    }

    public Listing getListingByID(int id) {
        return listingRepository.findById(id)
                .orElse(null);
    }

    public void deleteListing(int id) {
        listingRepository.deleteById(id);
    }

    public Listing updateListing(int id, Listing newListing) {
        return listingRepository.findById(id)
                .map(listing -> {
                    listing.setTimeListed(newListing.getTimeListed());
                    listing.setActive(newListing.isActive());
                    listing.setGuineaPigs(newListing.getGuineaPigs());
                    listing.setListingType(newListing.getListingType());
                    listing.setLocation(newListing.getLocation());
                    listing.setMustAdoptTogether(newListing.isMustAdoptTogether());
                    listing.setNumGuineaPigs(newListing.getNumGuineaPigs());
                    listing.setDescription(newListing.getDescription());
                    return listingRepository.save(listing);
                })
                .orElseGet(() -> {
                    newListing.setId(id);
                    return listingRepository.save(newListing);
                });
    }
}
