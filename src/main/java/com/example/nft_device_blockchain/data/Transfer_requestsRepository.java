package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface Transfer_requestsRepository extends JpaRepository<Transfer_requests, Integer> {

    @Query("SELECT t FROM Transfer_requests t WHERE t.devices = ?1")
    List<Transfer_requests> findByItem_id(int itemId);

    @Query("SELECT t FROM Transfer_requests t WHERE t.requester = ?1")
    List<Transfer_requests> findByRequester_id(int requesterId);

    @Query("SELECT t FROM Transfer_requests t WHERE t.seller = ?1")
    List<Transfer_requests> findBySeller_id(int sellerId);

    @Query("SELECT t FROM Transfer_requests t WHERE t.status = ?1")
    List<Transfer_requests> findByStatus(Status status);

    @Query("SELECT t FROM Transfer_requests t WHERE t.request_public_key = ?1")
    List<Transfer_requests> findByRequest_public_key(String requestPublicKey);
}
