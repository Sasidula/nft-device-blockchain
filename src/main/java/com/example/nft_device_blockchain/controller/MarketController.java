package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Market;
import com.example.nft_device_blockchain.data.MarketDTO;
import com.example.nft_device_blockchain.service.MarketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/market")
public class MarketController {

    private final MarketService marketService;

    public MarketController(MarketService marketService) {
        this.marketService = marketService;
    }

    @GetMapping
    public List<Market> getAllMarkets() {
        return marketService.getAllMarket();
    }

    @PostMapping
    public ResponseEntity<?> createMarket(@RequestBody MarketDTO marketDTO) {
        return marketService.createMarket(marketDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateMarket(@PathVariable int id, @RequestBody MarketDTO marketDTO) {
        return marketService.updateMarket(id, marketDTO);
    }

    @DeleteMapping("/{id}")
    public String deleteMarket(@PathVariable int id) {
        return marketService.deleteMarket(id);
    }

    @GetMapping("/{id}")
    public Market getMarketById(@PathVariable int id) {
        return marketService.getMarketById(id);
    }

    @GetMapping("/device/{id}")
    public List<Market> getMarketByDeviceId(@PathVariable int id) {
        return marketService.getMarketByDeviceId(id);
    }

}
