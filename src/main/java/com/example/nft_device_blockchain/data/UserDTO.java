package com.example.nft_device_blockchain.data;

public class UserDTO {
    private String name;
    private String email;
    private String password;
    private String walletAddress;
    private RoleDTO.Role role;

    // Only used if role is RETAILER or CONSUMER
    private String address;
    private String phone;
    private Service.service service;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getWalletAddress() {
        return walletAddress;
    }

    public void setWalletAddress(String walletAddress) {
        this.walletAddress = walletAddress;
    }

    public RoleDTO.Role getRole() {
        return role;
    }

    public void setRole(RoleDTO.Role role) {
        this.role = role;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Service.service getService() {
        return service;
    }

    public void setService(Service.service service) {
        this.service = service;
    }
}
