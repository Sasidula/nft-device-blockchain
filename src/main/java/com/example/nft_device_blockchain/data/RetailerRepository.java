package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RetailerRepository extends JpaRepository<Retailer, Long> {
    Retailer findByUser(Users user);
}
