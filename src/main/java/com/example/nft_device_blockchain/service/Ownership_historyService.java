package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.Devices;
import com.example.nft_device_blockchain.data.Ownership_history;
import com.example.nft_device_blockchain.data.Ownership_historyRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Ownership_historyService {

    private final Ownership_historyRepository ownership_historyRepository;

    public Ownership_historyService(Ownership_historyRepository ownership_historyRepository) {
        this.ownership_historyRepository = ownership_historyRepository;
    }

    public List<Ownership_history> getAllOwnership_history() {
        return ownership_historyRepository.findAll();
    }

    public Ownership_history addOwnership_history(Ownership_history ownership_history) {
        ownership_historyRepository.save(ownership_history);
        return ownership_history;
    }

    public Optional<Ownership_history> getOwnership_historyById(int id) {
        return ownership_historyRepository.findById(id);
    }

    public void deleteOwnership_history(int id) {
        ownership_historyRepository.deleteById(id);
    }

    public Ownership_history updateOwnership_history(int id, Ownership_history ownership_history){
        ownership_history.setOwnershipId(id);
        return ownership_historyRepository.save(ownership_history);
    }

    /*public List<Ownership_history> getOwnership_historyByDevice(Devices device) {
        return ownership_historyRepository.findByDeviceId(device);
    }*/

    public Ownership_history getLatestOwnershipByDevice(Devices device) {
        return ownership_historyRepository.findLatestOwnershipByDevice(device, PageRequest.of(0, 1)).get(0);
    }


    public List<Ownership_history> getOwnership_historyByTransaction_hash(String transaction_hash) {
        return ownership_historyRepository.findByTransactionHash(transaction_hash);
    }

    public List<Ownership_history> getOwnership_historyByPublicKey(String publicKey) {
        return ownership_historyRepository.findByPublicKey(publicKey);
    }

    public List<Ownership_history> getOwnership_historyByPrivateKey(String privateKey) {
        return ownership_historyRepository.findByPrivateKey(privateKey);
    }

}
