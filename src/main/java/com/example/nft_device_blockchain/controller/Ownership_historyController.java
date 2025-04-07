package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Ownership_history;
import com.example.nft_device_blockchain.service.Ownership_historyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/history")
public class Ownership_historyController {

    private final Ownership_historyService ownership_historyService;

    public Ownership_historyController(Ownership_historyService ownership_historyService) {
        this.ownership_historyService = ownership_historyService;
    }

    @GetMapping
    public List<Ownership_history> getAllOwnership_history() {
        return ownership_historyService.getAllOwnership_history();
    }

    @PostMapping
    public Ownership_history createOwnership_history(@RequestBody Ownership_history ownership_history) {
        return ownership_historyService.addOwnership_history(ownership_history);
    }

    @DeleteMapping("{id}")
    public void deleteOwnership_history(@PathVariable int id) {
        ownership_historyService.deleteOwnership_history(id);
    }

    @GetMapping("{id}")
    public Ownership_history getOwnership_historyById(@PathVariable int id) {
        Optional<Ownership_history> ownership_history = ownership_historyService.getOwnership_historyById(id);
        return ownership_history.orElse(null);
    }

    @PutMapping("{id}")
    public Ownership_history updateOwnership_history(@PathVariable Long id, @RequestBody Ownership_history ownership_history) {
        return ownership_historyService.updateOwnership_history(id, ownership_history);
    }

    @GetMapping("/device/{id}")
    public List<Ownership_history> getOwnership_historyByDeviceId(@PathVariable int id) {
        return ownership_historyService.getOwnership_historyByDeviceId(id);
    }


}
