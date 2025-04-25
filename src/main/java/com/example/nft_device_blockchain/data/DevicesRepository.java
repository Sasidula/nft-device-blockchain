package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DevicesRepository extends JpaRepository<Devices, Integer> {

    Devices findByNftTokenId(String nftTokenId);

    List<Devices> findBySerialNumber(String serialNumber);

    List<Devices> findByName(String name);

    List<Devices> findByBrand(String brand);

    List<Devices> findByModelNumber(String modelNumber);

    List<Devices> findByDeviceType(String deviceType);

    List<Devices> findByRegisteredBy(String registeredBy);
}
