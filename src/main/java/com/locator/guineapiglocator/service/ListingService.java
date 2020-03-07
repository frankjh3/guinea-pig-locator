package com.locator.guineapiglocator.service;

import com.locator.guineapiglocator.dao.ListingRepository;
import com.locator.guineapiglocator.model.GuineaPig;
import com.locator.guineapiglocator.model.Listing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class ListingService {

    private final ListingRepository listingRepository;
    private final LocationService locationService;
    private final GuineaPigService guineaPigService;

    @Autowired
    public ListingService(ListingRepository listingRepository, LocationService locationService, GuineaPigService guineaPigService) {
        this.listingRepository = listingRepository;
        this.locationService = locationService;
        this.guineaPigService = guineaPigService;
    }

    public Listing addListing(Listing listing) {
        Random rand = new Random();
        listing.setTimeListed(LocalDateTime.now());
        listing.setActive(true);
        listing.setPictureNum(rand.nextInt(10));
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

    public List<Listing> getActiveListings() {
        return this.listingRepository.findByIsActive(true);
    }

    public Listing getListingByID(int id) {
        return listingRepository.findById(id)
                .orElseThrow(RuntimeException::new);
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

    public void setListingToInactive(Optional<Listing> listing) {
        listing.map(listing1 -> {
                    listing1.setActive(false);
                    return listingRepository.save(listing1);
        });
    }

    /**
     * Check if all guinea pigs for a listing have been adopted. If so, change
     * listing to be inactive
     */
    public void checkAllAdopted(int id) {
        Optional<Listing> listing = listingRepository.findById(id);
        boolean allAdopted = true;
        for (GuineaPig guineaPig : listing.get().getGuineaPigs()) {
            if (!guineaPig.isAdopted()) {
                allAdopted = false;
                break;
            }
        }
        if (allAdopted) {
            setListingToInactive(listing);
        }
    }

    public void markAllAdopted(int id) {
        Optional<Listing> listing = listingRepository.findById(id);
        for (GuineaPig guineaPig : listing.get().getGuineaPigs()) {
            guineaPigService.markAsAdopted(guineaPig.getId());
        }
        setListingToInactive(listing);
    }
}
