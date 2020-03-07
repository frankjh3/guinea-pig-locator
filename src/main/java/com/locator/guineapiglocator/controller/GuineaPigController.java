package com.locator.guineapiglocator.controller;

import com.locator.guineapiglocator.model.GuineaPig;
import com.locator.guineapiglocator.service.GuineaPigService;
import com.locator.guineapiglocator.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Rest Controller for updating guinea pig information
 */
@RestController
@RequestMapping("api/v1/guineapig")
public class GuineaPigController {

    private final GuineaPigService guineaPigService;
    private final ListingService listingService;

    @Autowired
    public GuineaPigController(GuineaPigService guineaPigService, ListingService listingService) {
        this.guineaPigService = guineaPigService;
        this.listingService = listingService;
    }

    @PostMapping
    public void addGuineaPig(@Valid @NonNull @RequestBody GuineaPig guineaPig) {
        this.guineaPigService.addGuineaPig(guineaPig);
    }

    @PostMapping(path = "{id}")
    public void markAsAdopted(@PathVariable("id") int id) {
        this.guineaPigService.markAsAdopted(id);
        this.listingService.checkAllAdopted(guineaPigService.getGuineaPigByID(id).getListing().getId());
    }

    @GetMapping
    public List<GuineaPig> getAllGuineaPigs() {
        return this.guineaPigService.getAllGuineaPigs();
    }

    @GetMapping(path = "{id}")
    public GuineaPig getGuineaPigByID(@PathVariable("id") int id) {
        return this.guineaPigService.getGuineaPigByID(id);
    }

    /*
    TODO: USE WebSecurityConfigurerAdapter to restrict these
    */

    @DeleteMapping(path = "{id}")
    public void deleteGuineaPig(@PathVariable("id") int id) {
        this.guineaPigService.deleteGuineaPig(id);
    }

    @PutMapping(path = "{id}")
    public GuineaPig updateGuineaPig(@PathVariable("id") int id, @Valid @NonNull @RequestBody GuineaPig newGuineaPig) {
        return this.guineaPigService.updateGuineaPig(id, newGuineaPig);
    }

}
