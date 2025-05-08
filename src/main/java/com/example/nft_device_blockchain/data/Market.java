package com.example.nft_device_blockchain.data;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "market")
public class Market {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "market_id")
    private int id;

    @ColumnDefault("1")
    @Column(name = "availability")
    private Boolean availability;

    @Column(name = "price")
    private BigDecimal price;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "device_id", referencedColumnName = "device_id")
    private Devices device;

    @ManyToOne
    @JoinColumn(name = "ownership", referencedColumnName = "ownership_id")
    private Ownership_history ownership;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "created_at")
    private Date createdAt;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Boolean getAvailability() {
        return availability;
    }

    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Devices getDevice() {
        return device;
    }

    public void setDevice(Devices device) {
        this.device = device;
    }

    public Ownership_history getOwnership() {
        return ownership;
    }

    public void setOwnership(Ownership_history ownership) {
        this.ownership = ownership;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

}