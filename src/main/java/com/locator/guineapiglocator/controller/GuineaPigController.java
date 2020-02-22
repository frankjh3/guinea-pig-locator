package com.locator.guineapiglocator.controller;

import com.locator.guineapiglocator.model.GuineaPig;
import com.locator.guineapiglocator.service.GuineaPigService;
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

    @Autowired
    public GuineaPigController(GuineaPigService guineaPigService) {
        this.guineaPigService = guineaPigService;
    }

    @PostMapping
    public void addGuineaPig(@Valid @NonNull @RequestBody GuineaPig guineaPig) {
        this.guineaPigService.addGuineaPig(guineaPig);
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
