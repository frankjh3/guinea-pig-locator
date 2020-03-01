package com.locator.guineapiglocator.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

/**
 * Model someone creating a listing for available guinea pigs
 */
@Entity
@Table(name = "listing")
public class Listing {

    public enum ListingType {
        HOME,
        PETSTORE,
        RESCUE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private LocalDateTime timeListed;

    // set to false if all guinea pigs are adopted or listing is removed
    private boolean isActive;

    private int numGuineaPigs;

    private boolean mustAdoptTogether;

    private String description;

    private String email;

    private String phone;

    @Enumerated(EnumType.STRING)
    @Column(length = 8)
    private ListingType listingType;

    @OneToOne(fetch = FetchType.LAZY, cascade=CascadeType.ALL)
    @JoinColumn(name = "location_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Location location;

    @OneToMany(mappedBy = "listing", cascade=CascadeType.ALL, targetEntity = GuineaPig.class, fetch = FetchType.LAZY)
    private List<GuineaPig> guineaPigs;

    public Listing(Integer id,
                   LocalDateTime timeListed,
                   boolean isActive,
                   Location location,
                   int numGuineaPigs,
                   boolean mustAdoptTogether,
                   String description,
                   String email,
                   String phone,
                   ListingType listingType,
                   List<GuineaPig> guineaPigs) {
        this.id = id;
        this.timeListed = timeListed;
        this.isActive = isActive;
        this.location = location;
        this.numGuineaPigs = numGuineaPigs;
        this.mustAdoptTogether = mustAdoptTogether;
        this.description = description;
        this.email = email;
        this.phone = phone;
        this.listingType = listingType;
        this.guineaPigs = guineaPigs;
    }

    public Listing() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getTimeListed() {
        return timeListed;
    }

    public void setTimeListed(LocalDateTime dateListed) {
        this.timeListed = LocalDateTime.now();
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public int getNumGuineaPigs() {
        return numGuineaPigs;
    }

    public void setNumGuineaPigs(int numGuineaPigs) {
        this.numGuineaPigs = numGuineaPigs;
    }

    public boolean isMustAdoptTogether() {
        return mustAdoptTogether;
    }

    public void setMustAdoptTogether(boolean mustAdoptTogether) {
        this.mustAdoptTogether = mustAdoptTogether;
    }

    public ListingType getListingType() {
        return listingType;
    }

    public void setListingType(ListingType listingType) {
        this.listingType = listingType;
    }

    public List<GuineaPig> getGuineaPigs() {
        return guineaPigs;
    }

    public void setGuineaPigs(List<GuineaPig> guineaPigs) {
        this.guineaPigs = guineaPigs;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "Listing{" +
                "id=" + id +
                ", timeListed=" + timeListed +
                ", isActive=" + isActive +
                ", location='" + location + '\'' +
                ", numGuineaPigs=" + numGuineaPigs +
                ", mustAdoptTogether=" + mustAdoptTogether +
                ", description='" + description + '\'' +
                ", email='" + email + '\'' +
                ", phone=" + phone +
                ", listingType=" + listingType +
                ", guineaPigs=" + guineaPigs +
                '}';
    }
}
