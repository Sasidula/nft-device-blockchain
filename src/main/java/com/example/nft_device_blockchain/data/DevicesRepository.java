package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DevicesRepository extends JpaRepository<Devices, Integer> {

    Devices findByNftTokenId(String nftTokenId);

    List<Devices> findBySerialNumber(String serialNumber);

    List<Devices> findByName(String name);

    List<Devices> findByBrand(String brand);

    List<Devices> findByModelNumber(String modelNumber);

    List<Devices> findByDeviceType(String deviceType);

    @Query("SELECT d FROM Devices d WHERE d.registeredBy = ?1")
    List<Devices> findByRegisteredBy(int registeredBy);

    List<Devices> findByCurrentOwner_UserId(int currentOwner);
}
