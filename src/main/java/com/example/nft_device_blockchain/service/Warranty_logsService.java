package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.Warranty_logs;
import com.example.nft_device_blockchain.data.Warranty_logsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Warranty_logsService {

    private final Warranty_logsRepository warranty_logsRepository;

    public Warranty_logsService(Warranty_logsRepository warranty_logsRepository) {
        this.warranty_logsRepository = warranty_logsRepository;
    }

    public Warranty_logs createWarranty_logs(Warranty_logs warranty_logs) {
        return warranty_logsRepository.save(warranty_logs);
    }

    public List<Warranty_logs> getAllWarranty_logs() {
        return warranty_logsRepository.findAll();
    }

    public Optional<Warranty_logs> getWarranty_logsById(long id) {
        return warranty_logsRepository.findById(id);
    }

    public void deleteWarranty_logs(long id) {
        warranty_logsRepository.deleteById(id);
    }

    public Warranty_logs updateWarranty_logs(Warranty_logs warranty_logs) {
        return warranty_logsRepository.save(warranty_logs);
    }

    public List<Warranty_logs> getWarranty_logsByDeviceId(int deviceId) {
        return warranty_logsRepository.findByDeviceId(deviceId);
    }

    public List<Warranty_logs> getWarranty_logsByAdded_by(Long id){
        return warranty_logsRepository.findByAdded_by(id);
    }

}
