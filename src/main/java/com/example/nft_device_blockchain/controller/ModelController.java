package com.example.nft_device_blockchain.controller;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@RestController
@RequestMapping("/api/model")
public class ModelController {

    @PostMapping("/predict-next-month-price")
    public Map<String, Object> predictNextMonthPrice(@RequestBody Map<String, Object> payload) {
        String aiApiUrl = "http://localhost:5002/predict-next-month-price"; // Updated Flask endpoint
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(payload, headers);

        ResponseEntity<Map> response = restTemplate.postForEntity(aiApiUrl, request, Map.class);

        return response.getBody();
    }

}

