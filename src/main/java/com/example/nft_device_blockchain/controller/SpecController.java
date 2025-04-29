package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.*;
import com.example.nft_device_blockchain.service.SpecService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class SpecController {

    private final SpecService specService;

    public SpecController(SpecService specService) {
        this.specService = specService;
    }

    @GetMapping("/specs")
    public List<Spec> getAllSpecs() {
        return specService.getAllSpecs();
    }

    @GetMapping("/specs/{id}")
    public Spec getSpecById(@PathVariable int id) {
        return specService.getSpecById(id);
    }

    @PostMapping("/specs")
    public Spec createSpec(@RequestBody Spec spec) {
        return specService.createSpec(spec);
    }

    @PutMapping("/specs/{id}")
    public Spec updateSpec(@PathVariable int id, @RequestBody Spec spec) {
        return specService.updateSpec(id, spec);
    }

    @DeleteMapping("/specs/{id}")
    public void deleteSpec(@PathVariable int id) {
        specService.deleteSpec(id);
    }

}
