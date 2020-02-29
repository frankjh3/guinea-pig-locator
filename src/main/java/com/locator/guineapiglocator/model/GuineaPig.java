package com.locator.guineapiglocator.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

/**
 * Model Guinea Pig in system after being listed for adoption.
 */
@Entity
public class GuineaPig {

    public enum Gender {
        MALE,
        FEMALE
    }

    public enum Breed {
        ABYSSINIAN, ALPACA, AMERICAN, BALDWIN, CORONET, HIMALAYAN, LUNKARYA, MERINO,
        PERUVIAN, REX, SHEBA, SILKIE, SKINNY, TEDDY, TEXEL, WHITECRESTED, UNKNOWN
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    private boolean adopted;

    @Enumerated(EnumType.STRING)
    @Column(length = 6)
    private Gender gender;

    @Enumerated(EnumType.STRING)
    @Column(length = 15)
    private Breed breed;

    @Temporal(TemporalType.DATE)
    private Date dob;

    private String description;

    private boolean isNeutered;

    private double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "listing_id")
    @JsonIgnore
    private Listing listing;

    public GuineaPig(Integer id,
                     String name,
                     boolean adopted,
                     Gender gender,
                     Breed breed,
                     Date dob,
                     String description,
                     boolean isNeutered,
                     double price) {
        this.id = id;
        this.name = name;
        this.adopted = adopted;
        this.gender = gender;
        this.breed = breed;
        this.dob = dob;
        this.description = description;
        this.isNeutered = isNeutered;
        this.price = price;
    }

    public GuineaPig() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isAdopted() {
        return adopted;
    }

    public void setAdopted(boolean adopted) {
        this.adopted = adopted;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Breed getBreed() {
        return breed;
    }

    public void setBreed(Breed breed) {
        this.breed = breed;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Listing getListing() {
        return listing;
    }

    public void setListing(Listing listing) {
        this.listing = listing;
    }

    public boolean isNeutered() {
        return isNeutered;
    }

    public void setNeutered(boolean neutered) {
        isNeutered = neutered;
    }

    @Override
    public String toString() {
        return "GuineaPig{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", adopted=" + adopted +
                ", gender=" + gender +
                ", breed=" + breed +
                ", dob=" + dob +
                ", description='" + description + '\'' +
                ", isNeutered=" + isNeutered +
                ", price=" + price +
                ", listing=" + listing +
                '}';
    }
}
