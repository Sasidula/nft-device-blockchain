package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Transfer_requestsRepository extends JpaRepository<Transfer_requests, Long> {
    Iterable<Transfer_requests> findByItem_id(int itemId);

    Iterable<Transfer_requests> findByRequester_id(int requesterId);

    Iterable<Transfer_requests> findBySeller_id(int sellerId);

    Iterable<Transfer_requests> findByStatus(Status status);

    Iterable<Transfer_requests> findByRequest_public_key(String requestPublicKey);
}
