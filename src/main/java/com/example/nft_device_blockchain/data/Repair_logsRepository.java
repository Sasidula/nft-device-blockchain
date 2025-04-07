package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface Repair_logsRepository extends JpaRepository<Repair_logs, Long> {
    Iterable<Repair_logs> findByDevice_id(int deviceId);

    Iterable<Repair_logs> findByAdded_by(int addedBy);

    Iterable<Repair_logs> findByDate(Date date);

    Iterable<Repair_logs> findByCenter_name(String centerName);
}
