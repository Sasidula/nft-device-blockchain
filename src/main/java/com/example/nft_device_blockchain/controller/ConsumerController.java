package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Consumer;
import com.example.nft_device_blockchain.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/consumers")
public class ConsumerController {

    @Autowired
    private UsersService userService;

    @PostMapping
    public Consumer createConsumer(@RequestBody Consumer consumer) {
        return userService.createConsumer(consumer);
    }
}
