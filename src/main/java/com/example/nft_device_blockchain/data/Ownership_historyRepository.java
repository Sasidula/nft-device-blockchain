package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Ownership_historyRepository extends JpaRepository<Ownership_history, Long> {
    List<Ownership_history> findByDevice_id(int deviceId);

    List<Ownership_history> findByTransaction_hash(String transactionHash);

    List<Ownership_history> findByPublicKey(String publicKey);

    List<Ownership_history> findByPrivateKey(String privateKey);
}
