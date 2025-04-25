package com.example.nft_device_blockchain.data;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "ownership_history")
public class Ownership_history {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ownership_id")
    private int ownershipId;

    @ManyToOne
    @JoinColumn(name = "device_id", referencedColumnName = "device_id")
    private Devices devices;

    @ManyToOne
    @JoinColumn(name = "from_user_id", referencedColumnName = "user_id")
    private Users from_user;

    @ManyToOne
    @JoinColumn(name = "to_user_id", referencedColumnName = "user_id")
    private Users to_user;

    @Column(name = "transfer_date")
    private Date transfer_date;

    @Column(name = "transaction_hash")
    private String transaction_hash;

    @Lob
    @Column(name = "public_key", columnDefinition = "TEXT")
    private String publicKey;

    @Lob
    @Column(name = "private_key", columnDefinition = "TEXT")
    private String privateKey;

    public int getOwnershipId() {
        return ownershipId;
    }

    public void setOwnershipId(int ownershipId) {
        this.ownershipId = ownershipId;
    }

    public Devices getDevices() {
        return devices;
    }

    public void setDevices(Devices devices) {
        this.devices = devices;
    }

    public Users getFrom_user() {
        return from_user;
    }

    public void setFrom_user(Users from_user) {
        this.from_user = from_user;
    }

    public Users getTo_user() {
        return to_user;
    }

    public void setTo_user(Users to_user) {
        this.to_user = to_user;
    }

    public Date getTransfer_date() {
        return transfer_date;
    }

    public void setTransfer_date(Date transfer_date) {
        this.transfer_date = transfer_date;
    }

    public String getTransaction_hash() {
        return transaction_hash;
    }

    public void setTransaction_hash(String transaction_hash) {
        this.transaction_hash = transaction_hash;
    }

    public String getPublicKey() {
        return publicKey;
    }

    public void setPublicKey(String publicKey) {
        this.publicKey = publicKey;
    }

    public String getPrivateKey() {
        return privateKey;
    }

    public void setPrivateKey(String privateKey) {
        this.privateKey = privateKey;
    }
}
