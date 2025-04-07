package com.example.nft_device_blockchain.data;

import jakarta.persistence.*;

@Entity
@Table(name = "ownership_history")
public class Ownership_history {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ownership_id")
    private int ownershipId;

    @Column(name = "device_id")
    private int device_id;

    @Column(name = "owner_address")
    private String owner_address;

    @Column(name = "transaction_hash")
    private String transaction_hash;

    @Column(name = "created_at")
    private String created_at;

    @Lob
    @Column(name = "public_key", columnDefinition = "TEXT")
    private String publicKey;

    @Lob
    @Column(name = "private_key", columnDefinition = "TEXT")
    private String privateKey;

    public int getDevice_id() {
        return device_id;
    }

    public void setDevice_id(int device_id) {
        this.device_id = device_id;
    }

    public int getOwnershipId() {
        return ownershipId;
    }

    public void setOwnershipId(int ownershipId) {
        this.ownershipId = ownershipId;
    }

    public String getOwner_address() {
        return owner_address;
    }

    public void setOwner_address(String owner_address) {
        this.owner_address = owner_address;
    }

    public String getTransaction_hash() {
        return transaction_hash;
    }

    public void setTransaction_hash(String transaction_hash) {
        this.transaction_hash = transaction_hash;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
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
