package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface Ownership_historyRepository extends JpaRepository<Ownership_history, Integer> {
    @Query("SELECT o FROM Ownership_history o WHERE o.devices = ?1")
    List<Ownership_history> findByDeviceId(int deviceId);

    @Query("SELECT o FROM Ownership_history o WHERE o.transaction_hash = ?1")
    List<Ownership_history> findByTransactionHash(String transactionHash);

    @Query("SELECT o FROM Ownership_history o WHERE o.publicKey = ?1")
    List<Ownership_history> findByPublicKey(String publicKey);

    @Query("SELECT o FROM Ownership_history o WHERE o.privateKey = ?1")
    List<Ownership_history> findByPrivateKey(String privateKey);
}
