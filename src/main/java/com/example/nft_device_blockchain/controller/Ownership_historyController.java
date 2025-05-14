package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.*;
import com.example.nft_device_blockchain.service.DevicesService;
import com.example.nft_device_blockchain.service.Ownership_historyService;
import org.springframework.web.bind.annotation.*;

import java.security.SecureRandom;
import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/history")
public class Ownership_historyController {

    private final Ownership_historyService ownership_historyService;
    private final UsersRepository usersRepository;
    private final DevicesRepository devicesRepository;

    public Ownership_historyController(Ownership_historyService ownership_historyService,UsersRepository usersRepository, DevicesRepository devicesRepository) {
        this.ownership_historyService = ownership_historyService;
        this.usersRepository = usersRepository;
        this.devicesRepository = devicesRepository;
    }

    @GetMapping
    public List<Ownership_history> getAllOwnership_history() {
        return ownership_historyService.getAllOwnership_history();
    }

    /*@PostMapping
    public Ownership_history createOwnership_history(@RequestBody Ownership_history ownership_history) {
        return ownership_historyService.addOwnership_history(ownership_history);
    }*/

    @PostMapping
    public Ownership_history addOwnership(@RequestBody OwnershipHistoryDTO dto) throws ParseException {
        Ownership_history ownership = new Ownership_history();

        Devices device = devicesRepository.findById(dto.device_id)
                .orElseThrow(() -> new RuntimeException("Device not found"));
        Users fromUser = usersRepository.findById(dto.from_user_id)
                .orElseThrow(() -> new RuntimeException("From User not found"));
        Users toUser = usersRepository.findById(dto.to_user_id)
                .orElseThrow(() -> new RuntimeException("To User not found"));

        ownership.setDevices(device);
        ownership.setFrom_user(fromUser);
        ownership.setTo_user(toUser);
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        ownership.setTransfer_date(df.parse(dto.transfer_date));
        //ownership.setTransaction_hash(dto.transaction_hash);
        //ownership.setPublicKey(dto.publicKey);
        //ownership.setPrivateKey(dto.privateKey);

        ownership.setTransaction_hash(UUID.randomUUID().toString()); // Simple UUID for transaction hash
        SecureRandom secureRandom = new SecureRandom();
        byte[] keyBytes = new byte[32]; // 32 bytes for both keys
        secureRandom.nextBytes(keyBytes);
        ownership.setPublicKey(Base64.getEncoder().encodeToString(keyBytes));
        secureRandom.nextBytes(keyBytes); // Generate new random bytes for private key
        ownership.setPrivateKey(Base64.getEncoder().encodeToString(keyBytes));

        return ownership_historyService.addOwnership_history(ownership);
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

    /*@PutMapping("{id}")
    public Ownership_history updateOwnership_history(@PathVariable int id, @RequestBody Ownership_history ownership_history) {
        return ownership_historyService.updateOwnership_history(id, ownership_history);
    }*/

    @PutMapping("/{id}")
    public Ownership_history updateOwnershipHistory(@PathVariable int id, @RequestBody OwnershipHistoryDTO dto) {
        Ownership_history ownership = ownership_historyService.getOwnership_historyById(id)
                .orElseThrow(() -> new RuntimeException("Ownership history not found"));

        Devices device = devicesRepository.findById(dto.device_id)
                .orElseThrow(() -> new RuntimeException("Device not found"));
        Users fromUser = usersRepository.findById(dto.from_user_id)
                .orElseThrow(() -> new RuntimeException("From User not found"));
        Users toUser = usersRepository.findById(dto.to_user_id)
                .orElseThrow(() -> new RuntimeException("To User not found"));

        ownership.setDevices(device);
        ownership.setFrom_user(fromUser);
        ownership.setTo_user(toUser);
        ownership.setTransfer_date(Date.valueOf(dto.transfer_date));
        ownership.setTransaction_hash(dto.transaction_hash);
        ownership.setPublicKey(dto.publicKey);
        ownership.setPrivateKey(dto.privateKey);

        return ownership_historyService.updateOwnership_history(id, ownership);
    }


    /*@GetMapping("/devices/{id}")
    public List<Ownership_history> getOwnership_historyByDeviceId(@PathVariable int id) {
        Devices device = devicesRepository.findById(id).orElse(null);
        return ownership_historyService.getOwnership_historyByDevice(device);
    }

    @GetMapping("/device/{id}")
    public Ownership_history getLatestOwnershipHistoryByDeviceId(@PathVariable int id) {
        Devices device = devicesRepository.findById(id).orElse(null);
        if (device == null) {
            return null; // Or throw an exception if preferred
        }
        return ownership_historyService.getLatestOwnershipHistoryByDevice(device);
    }*/

    @GetMapping("/device/{id}")
    public Ownership_history getLatestOwnershipHistory(@PathVariable int id) {
        Devices device = devicesRepository.findById(id).orElse(null);
        return ownership_historyService.getLatestOwnershipByDevice(device);
    }


}
