package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface Repair_logsRepository extends JpaRepository<Repair_logs, Integer> {

    @Query("SELECT r FROM Repair_logs r WHERE r.device_id = ?1")
    List<Repair_logs> findByDeviceId(int deviceId);

    @Query("SELECT r FROM Repair_logs r WHERE r.added_by = ?1")
    List<Repair_logs> findByAddedBy(int addedBy);

    @Query("SELECT r FROM Repair_logs r WHERE r.center_name = ?1")
    List<Repair_logs> findByCenterName(String centerName);
}


