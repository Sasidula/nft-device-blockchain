package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Repair_logs;
import com.example.nft_device_blockchain.service.Repair_logsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/repairs")
public class Repair_logsController {

    private final Repair_logsService repairLogsService ;

    public Repair_logsController(Repair_logsService repairLogsService) {
        this.repairLogsService = repairLogsService;
    }

    @GetMapping
    public List<Repair_logs> getAllRepair_logs() {
        return repairLogsService.getAllRepair_logs();
    }

    @GetMapping("/device/{id}")
    public List<Repair_logs> getRepair_logsByDevice_id(@PathVariable int id) {
        return repairLogsService.getRepair_logsByDevice_id(id);
    }

    @GetMapping("/added_by/{id}")
    public List<Repair_logs> getRepair_logsByAdded_by(@PathVariable int id) {
        return repairLogsService.getRepair_logsByAdded_by(id);
    }

    @GetMapping("/center_name/{name}")
    public List<Repair_logs> getRepair_logsByCenter_name(@PathVariable String name) {
        return repairLogsService.getRepair_logsByCenter_name(name);
    }

    @PostMapping
    public Repair_logs createRepair_logs(@RequestBody Repair_logs repair_logs) {
        return repairLogsService.createRepair_logs(repair_logs);
    }

    @PutMapping
    public Repair_logs updateRepair_logs(@RequestBody Repair_logs repair_logs) {
        return repairLogsService.updateRepair_logs(repair_logs);
    }

    @DeleteMapping
    public void deleteRepair_logs(@RequestBody Repair_logs repair_logs) {
        repairLogsService.deleteRepair_logs(repair_logs);
    }

    @GetMapping("/{id}")
    public Repair_logs getRepair_logs(@PathVariable int id) {
        return repairLogsService.getRepair_logs(id);
    }

}
