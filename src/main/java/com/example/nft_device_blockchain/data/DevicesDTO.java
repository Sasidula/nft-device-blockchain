package com.example.nft_device_blockchain.data;

import java.util.Date;

public class DevicesDTO {
    private String name;
    private String brand;
    private String modelNumber;
    private String serialNumber;
    private String deviceType;
    private double originalPrice;
    private Date releaseDate;
    private Date purchaseDate;
    private byte[] imageBlob;
    private String nftTokenId;
    private Long registeredById;
    private Long currentOwnerId;
    private boolean blacklisted;
}
