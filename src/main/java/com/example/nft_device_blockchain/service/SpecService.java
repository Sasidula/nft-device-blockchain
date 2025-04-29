package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.Spec;
import com.example.nft_device_blockchain.data.SpecRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecService {

    private final SpecRepository specRepository;

    public SpecService(SpecRepository specRepository) {
        this.specRepository = specRepository;
    }

    public List<Spec> getAllSpecs() {
        return specRepository.findAll();
    }

    public Spec getSpecById(int id) {
        return specRepository.findById(id).orElse(null);
    }

    public Spec createSpec(Spec spec) {
        return specRepository.save(spec);
    }

    public Spec updateSpec(int id,Spec spec) {
        Spec existingSpec = specRepository.findById(id).orElse(null);
        if (existingSpec != null) {
            existingSpec.setProcessor(spec.getProcessor());
            existingSpec.setCamera(spec.getCamera());
            existingSpec.setStorage(spec.getStorage());
            existingSpec.setDisplay(spec.getDisplay());
            existingSpec.setBattery(spec.getBattery());
            existingSpec.setRam(spec.getRam());
            existingSpec.setOs(spec.getOs());
            existingSpec.setPorts(spec.getPorts());
            return specRepository.save(existingSpec);
        }
        return spec;
    }

    public String deleteSpec(int id) {
        specRepository.deleteById(id);
        if(specRepository.existsById(id)){
            return "Spec not deleted";
        } else {
            return "Spec deleted";
        }
    }
}
