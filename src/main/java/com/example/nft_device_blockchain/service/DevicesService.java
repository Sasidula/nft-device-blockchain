package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.Devices;
import com.example.nft_device_blockchain.data.DevicesRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DevicesService {

    private final DevicesRepository devicesRepository;

    public DevicesService(DevicesRepository devicesRepository) {
        this.devicesRepository = devicesRepository;
    }

    public List<Devices> getAllDevices() {
        return devicesRepository.findAll();
    }

    public Optional<Devices> getDeviceById(int id) {
        return devicesRepository.findById(id);
    }

    public Devices createDevice(Devices device) {
        return devicesRepository.save(device);
    }

    public void deleteDevice(int id) {
        devicesRepository.deleteById(id);
    }

    public void updateDevice(Devices device) {
        devicesRepository.save(device);
    }

    public Devices getDeviceByNftTokenId(String nftTokenId) {
        return devicesRepository.findByNftTokenId(nftTokenId);
    }

    public Devices getDeviceBySerialNumber(String serialNumber) {
        return devicesRepository.findBySerialNumber(serialNumber);
    }

    public Devices getDeviceByName(String name) {
        return devicesRepository.findByName(name);
    }

    public Devices getDeviceByBrand(String brand) {
        return devicesRepository.findByBrand(brand);
    }

    public Devices getDeviceByModelNumber(String modelNumber) {
        return devicesRepository.findByModelNumber(modelNumber);
    }

    public Devices getDeviceByDeviceType(String deviceType) {
        return devicesRepository.findByDeviceType(deviceType);
    }

    public Devices getDeviceByRegisteredBy(String registeredBy) {
        return devicesRepository.findByRegisteredBy(registeredBy);
    }

    public Devices getDeviceByBlacklisted(boolean blacklisted) {
        return devicesRepository.findByBlacklisted(blacklisted);
    }

    public Devices getDeviceByCreatedAt(String createdAt) {
        return devicesRepository.findByCreatedAt(createdAt);
    }

    public Devices getDeviceByPurchaseDate(String purchaseDate) {
        return devicesRepository.findByPurchaseDate(purchaseDate);
    }

    public Devices getDeviceByOriginalPrice(double originalPrice) {
        return devicesRepository.findByOriginalPrice(originalPrice);
    }

}
