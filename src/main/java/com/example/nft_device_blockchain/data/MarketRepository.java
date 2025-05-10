package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MarketRepository extends JpaRepository<Market, Integer> {

    List<Market> findByDevice(Devices device);

}
