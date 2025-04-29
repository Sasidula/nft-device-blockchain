package com.example.nft_device_blockchain.data;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "devices")
public class Devices {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "device_id")
    private int deviceId;

    @Column(name = "name")
    private String name;

    @Column(name = "brand")
    private String brand;

    @Column(name = "model_number")
    private String modelNumber;

    @Column(name = "serial_number")
    private String serialNumber;

    @Column(name = "device_type")
    private String deviceType;

    @OneToMany(mappedBy = "device", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Spec> spec = new ArrayList<>();

    @Column(name = "original_price")
    private double originalPrice;

    @Column(name = "release_date")
    private Date releaseDate;

    @Column(name = "purchase_date")
    private Date purchaseDate;

    @Lob
    @Column(name = "image_blob")
    private byte[] imageBlob;

    @Column(name = "nft_token_id")
    private String nftTokenId;

    @ManyToOne
    @JoinColumn(name = "registered_by", referencedColumnName = "user_id")
    private Users registeredBy;

    @ManyToOne
    @JoinColumn(name = "current_owner_id", referencedColumnName = "user_id")
    private Users currentOwner;

    @OneToMany(mappedBy = "device", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Repair_logs> repairLogs = new ArrayList<>();

    @OneToMany(mappedBy = "device", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Warranty_logs> warrantyLogs = new ArrayList<>();

    @Column(name = "blacklisted")
    private boolean blacklisted;

    @Column(name = "created_at")
    private Date createdAt;

    public int getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(int deviceId) {
        this.deviceId = deviceId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModelNumber() {
        return modelNumber;
    }

    public void setModelNumber(String modelNumber) {
        this.modelNumber = modelNumber;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getDeviceType() {
        return deviceType;
    }

    public void setDeviceType(String deviceType) {
        this.deviceType = deviceType;
    }

    public double getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(double originalPrice) {
        this.originalPrice = originalPrice;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public byte[] getImageBlob() {
        return imageBlob;
    }

    public void setImageBlob(byte[] imageBlob) {
        this.imageBlob = imageBlob;
    }

    public String getNftTokenId() {
        return nftTokenId;
    }

    public void setNftTokenId(String nftTokenId) {
        this.nftTokenId = nftTokenId;
    }

    public Users getRegisteredBy() {
        return registeredBy;
    }

    public void setRegisteredBy(Users registeredBy) {
        this.registeredBy = registeredBy;
    }

    public boolean isBlacklisted() {
        return blacklisted;
    }

    public void setBlacklisted(boolean blacklisted) {
        this.blacklisted = blacklisted;
    }

    public Users getCurrentOwner() {
        return currentOwner;
    }

    public void setCurrentOwner(Users currentOwner) {
        this.currentOwner = currentOwner;
    }

    public List<Repair_logs> getRepairLogs() {
        return repairLogs;
    }

    public void setRepairLogs(List<Repair_logs> repairLogs) {
        this.repairLogs = repairLogs;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public List<Spec> getSpec() {
        return spec;
    }

    public void setSpec(List<Spec> spec) {
        this.spec = spec;
    }
}
