package com.example.nft_device_blockchain.data;

import jakarta.persistence.*;

@Entity
@Table(name = "retailer")
public class Retailer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "retailer_id")
    private Long retailer_id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private Users user;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private String phone;

    @Column(name = "services_Provided")
    private String services_provided;

    // Getters and Setters
    public Long getRetailerId() {
        return retailer_id;
    }

    public void setRetailerId(Long retailer_id) {
        this.retailer_id = retailer_id;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getServicesProvided() {
        return services_provided;
    }

    public void setServicesProvided(String services_provided) {
        this.services_provided = services_provided;
    }
}
