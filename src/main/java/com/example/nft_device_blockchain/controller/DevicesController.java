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

}
