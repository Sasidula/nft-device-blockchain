package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.*;
import com.example.nft_device_blockchain.service.DevicesService;
import com.example.nft_device_blockchain.service.Ownership_historyService;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;

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
        ownership.setTransaction_hash(dto.transaction_hash);
        ownership.setPublicKey(dto.publicKey);
        ownership.setPrivateKey(dto.privateKey);

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


    @GetMapping("/device/{id}")
    public List<Ownership_history> getOwnership_historyByDeviceId(@PathVariable int id) {
        return ownership_historyService.getOwnership_historyByDeviceId(id);
    }

}
