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

    public Devices updateDevice(Devices device) {
        devicesRepository.save(device);
        return device;
    }

    public Devices getDeviceByNftTokenId(String nftTokenId) {
        return devicesRepository.findByNftTokenId(nftTokenId);
    }

    public List<Devices> getDeviceBySerialNumber(String serialNumber) {
        return devicesRepository.findBySerialNumber(serialNumber);
    }

    public List<Devices> getDeviceByName(String name) {
        return devicesRepository.findByName(name);
    }

    public List<Devices> getDeviceByBrand(String brand) {
        return devicesRepository.findByBrand(brand);
    }

    public List<Devices> getDeviceByModelNumber(String modelNumber) {
        return devicesRepository.findByModelNumber(modelNumber);
    }

    public List<Devices> getDeviceByDeviceType(String deviceType) {
        return devicesRepository.findByDeviceType(deviceType);
    }

    public List<Devices> getDeviceByRegisteredBy(String registeredBy) {
        return devicesRepository.findByRegisteredBy(registeredBy);
    }

}
