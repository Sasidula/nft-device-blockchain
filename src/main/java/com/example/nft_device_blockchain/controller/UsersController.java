package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.Users;
import com.example.nft_device_blockchain.data.UsersRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/user")
public class UsersController {

    private final UsersRepository usersRepository;

    public UsersController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @GetMapping
    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    @PostMapping
    public Users createUser(@RequestBody Users user) {
        return usersRepository.save(user);
    }

    @PutMapping("/{userId}")
    public Users updateUser(@PathVariable Long userId, @RequestBody Users user) {
        user.setUserId(userId);
        return usersRepository.save(user);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable int userId) {
        usersRepository.deleteById(userId);
    }

    @GetMapping("/{userId}")
    public Users getUserById(@PathVariable int userId) {
        return usersRepository.findById(userId).orElse(null);
    }

    @GetMapping("/email/{email}")
    public List<Users> getUserByEmail(@PathVariable String email) {
        return usersRepository.findByEmail(email);
    }

    @GetMapping("/walletAddress/{walletAddress}")
    public Users getUserByWalletAddress(@PathVariable String walletAddress) {
        return usersRepository.findByWalletAddress(walletAddress);
    }

    @GetMapping("/name/{name}")
    public List<Users> getUserByName(@PathVariable String name) {
        return usersRepository.findByName(name);
    }







}
