package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Consumer;
import com.example.nft_device_blockchain.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/consumers")
public class ConsumerController {

    @Autowired
    private UsersService userService;

    @GetMapping
    public List<Consumer> getAllConsumers() {
        return userService.getAllConsumers();
    }

}