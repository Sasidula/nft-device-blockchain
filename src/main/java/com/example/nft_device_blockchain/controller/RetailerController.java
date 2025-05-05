package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Retailer;
import com.example.nft_device_blockchain.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/retailers")
public class RetailerController {

    @Autowired
    private UsersService userService;

    @PostMapping
    public Retailer createRetailer(@RequestBody Retailer retailer) {
        return userService.createRetailer(retailer);
    }
}
