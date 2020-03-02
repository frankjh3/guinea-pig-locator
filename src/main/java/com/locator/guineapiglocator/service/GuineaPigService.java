package com.locator.guineapiglocator.service;

import com.locator.guineapiglocator.dao.GuineaPigRepository;
import com.locator.guineapiglocator.exceptions.GuineaPigNotFoundException;
import com.locator.guineapiglocator.model.GuineaPig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Handle storing, retrieving, updating, and deleting guinea pigs from guineaPigRepository
 */
@Service
public class GuineaPigService {

    private final GuineaPigRepository guineaPigRepository;

    @Autowired
    public GuineaPigService(GuineaPigRepository guineaPigRepository) {
        this.guineaPigRepository = guineaPigRepository;
    }

    public GuineaPig addGuineaPig(GuineaPig guineaPig) {
        return guineaPigRepository.save(guineaPig);
    }

    public List<GuineaPig> getAllGuineaPigs() {
        return guineaPigRepository.findAll();
    }

    public GuineaPig getGuineaPigByID(int id) {
        return guineaPigRepository.findById(id)
                .orElseThrow(() -> new GuineaPigNotFoundException(id));
    }

    public void deleteGuineaPig(int id) {
        guineaPigRepository.deleteById(id);
    }

    public GuineaPig updateGuineaPig(int id, GuineaPig newGuineaPig) {
        return guineaPigRepository.findById(id)
                .map(guineaPig -> {
                    guineaPig.setName(newGuineaPig.getName());
                    guineaPig.setAdopted(newGuineaPig.isAdopted());
                    guineaPig.setBreed(newGuineaPig.getBreed());
                    guineaPig.setAge(newGuineaPig.getAge());
                    guineaPig.setGender(newGuineaPig.getGender());
                    guineaPig.setNeutered(newGuineaPig.isNeutered());
                    guineaPig.setListing(newGuineaPig.getListing());
                    return guineaPigRepository.save(guineaPig);
                })
                .orElseGet(() -> {
                    newGuineaPig.setId(id);
                    return guineaPigRepository.save(newGuineaPig);
                });
    }
}
