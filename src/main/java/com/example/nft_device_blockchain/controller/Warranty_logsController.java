package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Warranty_logs;
import com.example.nft_device_blockchain.service.Warranty_logsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/warranties")
public class Warranty_logsController {

    private final Warranty_logsService warranty_logsService;

    public Warranty_logsController(Warranty_logsService warranty_logsService) {
        this.warranty_logsService = warranty_logsService;
    }

    @PostMapping
    public Warranty_logs createWarranty_logs(Warranty_logs warranty_logs) {
        return warranty_logsService.createWarranty_logs(warranty_logs);
    }

    @GetMapping
    public List<Warranty_logs> getAllWarranty_logs() {
        return warranty_logsService.getAllWarranty_logs();
    }

    @GetMapping("/{id}")
    public Optional<Warranty_logs> getWarranty_logsById(@PathVariable int id) {
        return warranty_logsService.getWarranty_logsById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteWarranty_logs(@PathVariable int id) {
        warranty_logsService.deleteWarranty_logs(id);
    }

    @PutMapping("/{id}")
    public Warranty_logs updateWarranty_logs(@PathVariable long id, @RequestBody Warranty_logs warranty_logs) {
        return warranty_logsService.updateWarranty_logs(warranty_logs);
    }

    @GetMapping("/added_by/{id}")
    public List<Warranty_logs> getWarranty_logsByAdded_by(@PathVariable Long id) {
        return warranty_logsService.getWarranty_logsByAdded_by(id);
    }

}
