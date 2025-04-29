package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Users;
import com.example.nft_device_blockchain.data.UsersRepository;
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
    private final UsersRepository usersRepository;

    public Warranty_logsController(Warranty_logsService warranty_logsService, UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
        this.warranty_logsService = warranty_logsService;
    }

    @PostMapping
    public Warranty_logs createWarranty_logs(@RequestBody Warranty_logs warranty_logs) {
        if (warranty_logs.getAdded_by() != null) {
            int userId = warranty_logs.getAdded_by().getUserId();
            Users user = usersRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
            warranty_logs.setAdded_by(user);
        }
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
    public Warranty_logs updateWarranty_logs(@PathVariable int id, @RequestBody Warranty_logs warranty_logs) {
        return warranty_logsService.updateWarranty_logs(warranty_logs);
    }

    @GetMapping("/added_by/{id}")
    public List<Warranty_logs> getWarranty_logsByAdded_by(@PathVariable int id) {
        return warranty_logsService.getWarranty_logsByAdded_by(id);
    }

}


