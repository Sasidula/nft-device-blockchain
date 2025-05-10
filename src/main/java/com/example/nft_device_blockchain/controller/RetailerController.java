package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Retailer;
import com.example.nft_device_blockchain.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/retailers")
public class RetailerController {

    @Autowired
    private UsersService userService;

    @GetMapping
    public List<Retailer> getAllRetailers() {
        return userService.getAllRetailers();
    }

}