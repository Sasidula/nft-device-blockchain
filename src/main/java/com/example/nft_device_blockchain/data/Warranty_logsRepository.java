package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Warranty_logsRepository extends JpaRepository<Warranty_logs, Long> {
    List<Warranty_logs> findByDeviceId(int deviceId);

    List<Warranty_logs> findByAdded_by(Long id);
}
