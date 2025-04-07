package com.example.nft_device_blockchain.data;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "transfer_requests")
public class Transfer_requests {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_id")
    private int request_id;

    @ManyToOne
    @JoinColumn(name = "item_id", referencedColumnName = "device_id")
    private Devices item;

    @ManyToOne
    @JoinColumn(name = "requester_id", referencedColumnName = "user_id")
    private Users requester;

    @ManyToOne
    @JoinColumn(name = "seller_id", referencedColumnName = "user_id")
    private Users seller;

    @Column(name = "request_public_key", columnDefinition = "TEXT")
    private String request_public_key;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status = Status.PENDING; // Default value

    public enum Status {
        PENDING,
        APPROVED,
        REJECTED
    }

    @Column(name = "timestamp")
    private Date timestamp;

    public int getRequest_id() {
        return request_id;
    }

    public void setRequest_id(int request_id) {
        this.request_id = request_id;
    }

    public Devices getItem() {
        return item;
    }

    public void setItem(Devices item) {
        this.item = item;
    }

    public Users getSeller() {
        return seller;
    }

    public void setSeller(Users seller) {
        this.seller = seller;
    }

    public Users getRequester() {
        return requester;
    }

    public void setRequester(Users requester) {
        this.requester = requester;
    }

    public String getRequest_public_key() {
        return request_public_key;
    }

    public void setRequest_public_key(String request_public_key) {
        this.request_public_key = request_public_key;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}
