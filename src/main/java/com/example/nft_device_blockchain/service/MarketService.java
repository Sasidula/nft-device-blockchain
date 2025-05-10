package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class MarketService {

    private final MarketRepository marketRepository;
    private final Ownership_historyRepository ownershipRepository;
    private final DevicesRepository devicesRepository;

    public MarketService(MarketRepository marketRepository, DevicesRepository devicesRepository, Ownership_historyRepository ownershipRepository) {
        this.marketRepository = marketRepository;
        this.devicesRepository = devicesRepository;
        this.ownershipRepository = ownershipRepository;
    }

    public List<Market> getAllMarket() {
        return marketRepository.findAll();
    }

    public ResponseEntity<?> createMarket(MarketDTO marketDTO) {
        Devices device = devicesRepository.findById(marketDTO.getDeviceId())
                .orElseThrow(() -> new RuntimeException("Device not found"));

        Ownership_history ownership = ownershipRepository.findById(marketDTO.getOwnershipId())
                .orElseThrow(() -> new RuntimeException("Ownership history not found"));

        Market market = new Market();
        market.setAvailability(marketDTO.isAvailability());
        market.setPrice(marketDTO.getPrice());
        market.setDevice(device);
        market.setOwnership(ownership);

        marketRepository.save(market);
        return ResponseEntity.ok("Market entry created");
    }

    public ResponseEntity<?> updateMarket(int id,MarketDTO marketDTO) {
        Optional<Market> optionalMarket = marketRepository.findById(id);
        if (!optionalMarket.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Market entry not found");
        }

        Market market = optionalMarket.get();

        Devices device = devicesRepository.findById(marketDTO.getDeviceId())
                .orElseThrow(() -> new RuntimeException("Device not found"));

        Ownership_history ownership = ownershipRepository.findById(marketDTO.getOwnershipId())
                .orElseThrow(() -> new RuntimeException("Ownership history not found"));

        market.setAvailability(marketDTO.isAvailability());
        market.setPrice(marketDTO.getPrice());
        market.setDevice(device);
        market.setOwnership(ownership);

        marketRepository.save(market);

        return ResponseEntity.ok("Market entry updated successfully");
    }

    /*
    public Market createMarket(Market market) {
        return marketRepository.save(market);
    }

    public Market updateMarket(int id,Market market) {
        return marketRepository.save(market);
    }*/

    public String deleteMarket(int id) {
        marketRepository.deleteById(id);
        return "Deleted";
    }

    public Market getMarketById(int id) {
        return marketRepository.findById(id).orElse(null);
    }

    public List<Market> getMarketByDeviceId(int id) {
        Devices device = devicesRepository.findById(id).orElse(null);
        if (device == null) {
            return List.of(); // or throw a custom exception
        }
        return marketRepository.findByDevice(device);

    }
}
