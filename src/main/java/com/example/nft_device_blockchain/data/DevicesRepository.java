package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DevicesRepository extends JpaRepository<Devices, Integer> {
    Devices findByNftTokenId(String nftTokenId);


    Devices findBySerialNumber(String serialNumber);

    Devices findByName(String name);

    Devices findByBrand(String brand);

    Devices findByModelNumber(String modelNumber);

    Devices findByDeviceType(String deviceType);

    Devices findByRegisteredBy(String registeredBy);

    Devices findByBlacklisted(boolean blacklisted);

    Devices findByCreatedAt(String createdAt);


    Devices findByPurchaseDate(String purchaseDate);

    Devices findByOriginalPrice(double originalPrice);
}
