package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.Status;
import com.example.nft_device_blockchain.data.Transfer_requests;
import com.example.nft_device_blockchain.data.Transfer_requestsRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class transfer_requestsService {

    private final Transfer_requestsRepository transfer_requestsRepository;

    public transfer_requestsService(Transfer_requestsRepository transfer_requestsRepository) {
        this.transfer_requestsRepository = transfer_requestsRepository;
    }

    public void deleteTransfer_request(long id) {
        transfer_requestsRepository.deleteById(id);
    }

    public void createTransfer_request(Transfer_requests transfer_requests) {
        transfer_requestsRepository.save(transfer_requests);
    }

    public void updateTransfer_request(Transfer_requests transfer_requests) {
        transfer_requestsRepository.save(transfer_requests);
    }

    public Optional<Transfer_requests> getTransfer_requestById(Long id) {
        return transfer_requestsRepository.findById(id);
    }

    public Iterable<Transfer_requests> getAllTransfer_requests() {
        return transfer_requestsRepository.findAll();
    }

    public Iterable<Transfer_requests> getTransfer_requestsByItem_id(int item_id) {
        return transfer_requestsRepository.findByItem_id(item_id);
    }

    public Iterable<Transfer_requests> getTransfer_requestsByRequester_id(int requester_id) {
        return transfer_requestsRepository.findByRequester_id(requester_id);
    }

    public Iterable<Transfer_requests> getTransfer_requestsBySeller_id(int seller_id) {
        return transfer_requestsRepository.findBySeller_id(seller_id);
    }

    public Iterable<Transfer_requests> getTransfer_requestsByStatus(Status status) {
        return transfer_requestsRepository.findByStatus(status);
    }

    public Iterable<Transfer_requests> getTransfer_requestsByRequest_public_key(String request_public_key) {
        return transfer_requestsRepository.findByRequest_public_key(request_public_key);
    }

}
