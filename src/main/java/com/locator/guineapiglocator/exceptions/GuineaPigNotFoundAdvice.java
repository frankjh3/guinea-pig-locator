package com.locator.guineapiglocator.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Set response for GuineaPigNotFoundException to be 404 error
 */
@ControllerAdvice
public class GuineaPigNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(GuineaPigNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String guineaPigNotFoundHandler(GuineaPigNotFoundException ex) {
        return ex.getMessage();
    }
}
