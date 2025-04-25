package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface Warranty_logsRepository extends JpaRepository<Warranty_logs, Integer> {

    @Query("SELECT w FROM Warranty_logs w WHERE w.added_by = ?1")
    List<Warranty_logs> findByAdded_by(Long id);

}
