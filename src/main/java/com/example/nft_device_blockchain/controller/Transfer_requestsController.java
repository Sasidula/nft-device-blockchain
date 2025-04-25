package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Status;
import com.example.nft_device_blockchain.data.Transfer_requests;
import com.example.nft_device_blockchain.service.Transfer_requestsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/requests")
public class Transfer_requestsController {

    private final Transfer_requestsService transfer_requestsService ;

    public Transfer_requestsController(Transfer_requestsService transfer_requestsService) {
        this.transfer_requestsService = transfer_requestsService;
    }

    @GetMapping
    public List<Transfer_requests> getAllTransfer_requests() {
        return transfer_requestsService.getAllTransfer_requests();
    }

    @PostMapping
    public void createTransfer_request(@RequestBody Transfer_requests transfer_requests) {
        transfer_requestsService.createTransfer_request(transfer_requests);
    }

    @DeleteMapping("{id}")
    public void deleteTransfer_request(@PathVariable int id) {
        transfer_requestsService.deleteTransfer_request(id);
    }

    @PutMapping("{id}")
    public void updateTransfer_request(@PathVariable Long id, @RequestBody Transfer_requests transfer_requests) {
        transfer_requestsService.updateTransfer_request(transfer_requests);
    }

    @GetMapping("{id}")
    public Transfer_requests getTransfer_requestById(@PathVariable int id) {
        return transfer_requestsService.getTransfer_requestById(id).orElse(null);
    }

    @GetMapping("/device/{id}")
    public List<Transfer_requests> getTransfer_requestByDeviceId(@PathVariable int id) {
        return transfer_requestsService.getTransfer_requestByDeviceId(id);
    }

    @GetMapping("/requester/{id}")
    public List<Transfer_requests> getTransfer_requestByRequester_id(@PathVariable int id) {
        return transfer_requestsService.getTransfer_requestsByRequester_id(id);
    }

    @GetMapping("/seller/{id}")
    public List<Transfer_requests> getTransfer_requestBySeller_id(@PathVariable int id) {
        return transfer_requestsService.getTransfer_requestsBySeller_id(id);
    }

    @GetMapping("/status/{status}")
    public List<Transfer_requests> getTransfer_requestByStatus(@PathVariable Status status) {
        return transfer_requestsService.getTransfer_requestsByStatus(status);
    }

    @GetMapping("/public_key/{public_key}")
    public List<Transfer_requests> getTransfer_requestByRequest_public_key(@PathVariable String public_key) {
        return transfer_requestsService.getTransfer_requestsByRequest_public_key(public_key);
    }


}
