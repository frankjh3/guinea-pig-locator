package com.locator.guineapiglocator.exceptions;

/**
 * Throw when attempting to retrieve guinea pig that cannot be found by ID
 */
public class GuineaPigNotFoundException extends RuntimeException{
    public GuineaPigNotFoundException(Integer id) {
        super("Could not find guinea pig: " + id);
    }
}
