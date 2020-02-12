package com.locator.guineapiglocator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class GuineaPigLocatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuineaPigLocatorApplication.class, args);
	}

	@RequestMapping("/")
	public String helloWorld() {
		return "Hello World!";
	}
}
