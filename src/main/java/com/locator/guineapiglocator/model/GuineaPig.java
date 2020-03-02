package com.locator.guineapiglocator.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Model Guinea Pig in system after being listed for adoption.
 */
@Entity
public class GuineaPig {

    public enum Gender {
        MALE,
        FEMALE,
        UNKNOWN
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
    @Column(length = 7)
    private Gender gender;

    @Enumerated(EnumType.STRING)
    @Column(length = 15)
    private Breed breed;

    private String age;

    private boolean isNeutered;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "listing_id")
    @JsonIgnore
    private Listing listing;

    public GuineaPig(Integer id,
                     String name,
                     boolean adopted,
                     Gender gender,
                     Breed breed,
                     String age,
                     boolean isNeutered) {
        this.id = id;
        this.name = name;
        this.adopted = adopted;
        this.gender = gender;
        this.breed = breed;
        this.age = age;
        this.isNeutered = isNeutered;
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

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
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
                ", age='" + age + '\'' +
                ", isNeutered=" + isNeutered +
                ", listing=" + listing +
                '}';
    }
}
