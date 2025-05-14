package com.example.nft_device_blockchain.data;

import org.springframework.data.domain.Limit;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface Ownership_historyRepository extends JpaRepository<Ownership_history, Integer> {
    /*@Query("SELECT o FROM Ownership_history o WHERE o.devices = ?1")
    List<Ownership_history> findByDeviceId(Devices device);*/


    @Query("SELECT o FROM Ownership_history o WHERE o.transaction_hash = ?1")
    List<Ownership_history> findByTransactionHash(String transactionHash);

    @Query("SELECT o FROM Ownership_history o WHERE o.publicKey = ?1")
    List<Ownership_history> findByPublicKey(String publicKey);

    @Query("SELECT o FROM Ownership_history o WHERE o.privateKey = ?1")
    List<Ownership_history> findByPrivateKey(String privateKey);

    @Query("SELECT o FROM Ownership_history o WHERE o.devices = :device ORDER BY o.transfer_date DESC")
    List<Ownership_history> findLatestOwnershipByDevice(@Param("device") Devices device, Pageable pageable);

}
