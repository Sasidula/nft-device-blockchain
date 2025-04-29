package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.*;
import com.example.nft_device_blockchain.service.SpecService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/specs")
public class SpecController {

    private final SpecService specService;

    public SpecController(SpecService specService) {
        this.specService = specService;
    }

    @GetMapping
    public List<Spec> getAllSpecs() {
        return specService.getAllSpecs();
    }

    @GetMapping("/{id}")
    public Spec getSpecById(@PathVariable int id) {
        return specService.getSpecById(id);
    }

    @PostMapping
    public Spec createSpec(@RequestBody Spec spec) {
        return specService.createSpec(spec);
    }

    @PutMapping("/{id}")
    public Spec updateSpec(@PathVariable int id, @RequestBody Spec spec) {
        return specService.updateSpec(id, spec);
    }

    @DeleteMapping("/{id}")
    public void deleteSpec(@PathVariable int id) {
        specService.deleteSpec(id);
    }

}
