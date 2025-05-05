package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsumerRepository extends JpaRepository<Consumer, Long> {
    Consumer findByUser(Users user);
}
