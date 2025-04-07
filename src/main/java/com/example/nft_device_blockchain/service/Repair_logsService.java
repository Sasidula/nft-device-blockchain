package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.Repair_logs;
import com.example.nft_device_blockchain.data.Repair_logsRepository;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class Repair_logsService {

    private final Repair_logsRepository repair_logsRepository;

    public Repair_logsService(Repair_logsRepository repair_logsRepository) {
        this.repair_logsRepository = repair_logsRepository;
    }

    public void createRepair_log(Repair_logs repair_logs) {
        repair_logsRepository.save(repair_logs);
    }

    public void updateRepair_log(Repair_logs repair_logs) {
        repair_logsRepository.save(repair_logs);
    }

    public void deleteRepair_log(Repair_logs repair_logs) {
        repair_logsRepository.delete(repair_logs);
    }

    public Repair_logs getRepair_log(long id) {
        return repair_logsRepository.findById(id).orElse(null);
    }

    public Iterable<Repair_logs> getAllRepair_logs() {
        return repair_logsRepository.findAll();
    }

    public Iterable<Repair_logs> getRepair_logsByDevice_id(int device_id) {
        return repair_logsRepository.findByDevice_id(device_id);
    }

    public Iterable<Repair_logs> getRepair_logsByAdded_by(int added_by) {
        return repair_logsRepository.findByAdded_by(added_by);
    }

    public Iterable<Repair_logs> getRepair_logsByDate(Date date) {
        return repair_logsRepository.findByDate(date);
    }

    public Iterable<Repair_logs> getRepair_logsByCenter_name(String center_name) {
        return repair_logsRepository.findByCenter_name(center_name);
    }

}
