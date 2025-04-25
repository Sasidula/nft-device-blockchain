package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.Repair_logs;
import com.example.nft_device_blockchain.data.Repair_logsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Repair_logsService {

    private final Repair_logsRepository repair_logsRepository;

    public Repair_logsService(Repair_logsRepository repair_logsRepository) {
        this.repair_logsRepository = repair_logsRepository;
    }

    public List<Repair_logs> getAllRepair_logs() {
        return repair_logsRepository.findAll();
    }

    public List<Repair_logs> getRepair_logsByDevice_id(int device_id) {
        return repair_logsRepository.findByDeviceId(device_id);
    }

    public List<Repair_logs> getRepair_logsByAdded_by(int added_by) {
        return repair_logsRepository.findByAddedBy(added_by);
    }

    public List<Repair_logs> getRepair_logsByCenter_name(String center_name) {
        return repair_logsRepository.findByCenterName(center_name);
    }

    public Repair_logs createRepair_logs(Repair_logs repairLogs) {
        return repair_logsRepository.save(repairLogs);
    }

    public Repair_logs updateRepair_logs(Repair_logs repairLogs) {
        return repair_logsRepository.save(repairLogs);
    }

    public void deleteRepair_logs(Repair_logs repairLogs) {
        repair_logsRepository.delete(repairLogs);
    }

    public Repair_logs getRepair_logs(int id) {
        return repair_logsRepository.findById(id).orElse(null);
    }
}
