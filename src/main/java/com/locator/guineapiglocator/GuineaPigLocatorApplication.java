package com.locator.guineapiglocator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class GuineaPigLocatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuineaPigLocatorApplication.class, args);
	}

}
