package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Devices;
import com.example.nft_device_blockchain.service.DevicesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/devices")
public class DevicesController {

    private final DevicesService devicesService;

    public DevicesController(DevicesService devicesService) {
        this.devicesService = devicesService;
    }

    @GetMapping
    public List<Devices> getAllDevices() {
        return devicesService.getAllDevices();
    }

    @GetMapping("/{id}")
    public Devices getDeviceById(@PathVariable int id) {
        Optional<Devices> device = devicesService.getDeviceById(id);
        return device.orElse(null);
    }

    @PostMapping
    public Devices createDevice(@RequestBody Devices device) {
        return devicesService.createDevice(device);
    }

    @DeleteMapping("/{id}")
    public void deleteDevice(@PathVariable int id) {
        devicesService.deleteDevice(id);
    }

    @PutMapping("/{id}")
    public Devices updateDevice(@PathVariable int id, @RequestBody Devices device) {
        Optional<Devices> existing = devicesService.getDeviceById(id);
        if (existing.isPresent()) {
            device.setDeviceId(id);
            return devicesService.updateDevice(device);
        } else {
            return null;
        }
    }


    @GetMapping("/nft/{nftTokenId}")
    public Devices getDeviceByNftTokenId(@PathVariable String nftTokenId) {
        return devicesService.getDeviceByNftTokenId(nftTokenId);
    }

    @GetMapping("/serial/{serialNumber}")
    public List<Devices> getDeviceBySerialNumber(@PathVariable String serialNumber) {
        return devicesService.getDeviceBySerialNumber(serialNumber);
    }

    @GetMapping("/name/{name}")
    public List<Devices> getDeviceByName(@PathVariable String name) {
        return devicesService.getDeviceByName(name);
    }

    @GetMapping("/brand/{brand}")
    public List<Devices> getDeviceByBrand(@PathVariable String brand) {
        return devicesService.getDeviceByBrand(brand);
    }

    @GetMapping("/model/{modelNumber}")
    public List<Devices> getDeviceByModelNumber(@PathVariable String modelNumber) {
        return devicesService.getDeviceByModelNumber(modelNumber);
    }

    @GetMapping("/type/{deviceType}")
    public List<Devices> getDeviceByDeviceType(@PathVariable String deviceType) {
        return devicesService.getDeviceByDeviceType(deviceType);
    }

    @GetMapping("/registered/{registeredBy}")
    public List<Devices> getDeviceByRegisteredBy(@PathVariable String registeredBy) {
        return devicesService.getDeviceByRegisteredBy(registeredBy);
    }

}
