package com.example.nft_device_blockchain.data;

import jakarta.persistence.*;

@Entity
@Table(name = "spec")
public class Spec {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "spec_id", nullable = false)
    private int spec_id;

    @Column(name = "device_id", nullable = false)
    private int device;

    @Column(name = "processor")
    private String processor;

    @Column(name = "storage")
    private String storage;

    @Column(name = "ram")
    private String ram;

    @Column(name = "display")
    private String display;

    @Column(name = "battery")
    private String battery;

    @Column(name = "os")
    private String os;

    @Column(name = "ports")
    private String ports;

    @Column(name = "camera")
    private String camera;

    @Column(name = "power_adapter")
    private String powerAdapter;

    public int getSpec_id() {
        return spec_id;
    }

    public void setSpec_id(int spec_id) {
        this.spec_id = spec_id;
    }

    public int getDeviceId() {
        return device;
    }

    public void setDeviceId(int device) {
        this.device = device;
    }

    public String getProcessor() {
        return processor;
    }

    public void setProcessor(String processor) {
        this.processor = processor;
    }

    public String getStorage() {
        return storage;
    }

    public void setStorage(String storage) {
        this.storage = storage;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getDisplay() {
        return display;
    }

    public void setDisplay(String display) {
        this.display = display;
    }

    public String getBattery() {
        return battery;
    }

    public void setBattery(String battery) {
        this.battery = battery;
    }

    public String getOs() {
        return os;
    }

    public void setOs(String os) {
        this.os = os;
    }

    public String getPorts() {
        return ports;
    }

    public void setPorts(String ports) {
        this.ports = ports;
    }

    public String getCamera() {
        return camera;
    }

    public void setCamera(String camera) {
        this.camera = camera;
    }

    public String getPowerAdapter() {
        return powerAdapter;
    }

    public void setPowerAdapter(String powerAdapter) {
        this.powerAdapter = powerAdapter;
    }

}