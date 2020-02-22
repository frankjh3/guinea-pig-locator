package com.locator.guineapiglocator.model;

import javax.persistence.*;
import java.util.Date;

/**
 * Model Guinea Pig in system after being listed for adoption.
 */
@Entity
public class GuineaPig {

    public enum ListingType {
        HOME,
        PETSTORE,
        RESCUE
    }

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
    // change to more specific data type - for now just store as string
    private String location;

    @Column(length = 8)
    @Enumerated(EnumType.STRING)
    private ListingType listingType;

    @Enumerated(EnumType.STRING)
    @Column(length = 6)
    private Gender gender;

    @Enumerated(EnumType.STRING)
    @Column(length = 15)
    private Breed breed;

    private Date dob;
    private String description;

    public GuineaPig(Integer id,
                     String name,
                     boolean adopted,
                     String location,
                     ListingType listingType,
                     Gender gender,
                     Breed breed,
                     Date dob,
                     String description) {
        this.id = id;
        this.name = name;
        this.adopted = adopted;
        this.location = location;
        this.listingType = listingType;
        this.gender = gender;
        this.breed = breed;
        this.dob = dob;
        this.description = description;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public ListingType getListingType() {
        return listingType;
    }

    public void setListingType(ListingType listingType) {
        this.listingType = listingType;
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

    @Override
    public String toString() {
        return "GuineaPig{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", adopted=" + adopted +
                ", location='" + location + '\'' +
                ", listingType=" + listingType +
                ", gender=" + gender +
                ", breed=" + breed +
                ", dob=" + dob +
                ", description='" + description + '\'' +
                '}';
    }
}
