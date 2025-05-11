package com.example.nft_device_blockchain.controller;

import com.example.nft_device_blockchain.data.*;
import com.example.nft_device_blockchain.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/user")
public class UsersController {

    private final UsersService usersService;

    private final UsersRepository usersRepository;

    public UsersController(UsersService usersService, UsersRepository usersRepository) {
        this.usersService = usersService;
        this.usersRepository = usersRepository;
    }

    @GetMapping
    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    /*@PostMapping
    public Users createUser(@RequestBody Users user) {
        return usersRepository.save(user);
    }

    @PutMapping("/{userId}")
    public Users updateUser(@PathVariable int userId, @RequestBody Users user) {
        user.setUser(userId);
        return usersRepository.save(user);
    }
    */

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserDTO userDto) {
        return usersService.registerUser(userDto);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<?> updateUser(@PathVariable int userId, @RequestBody UserDTO userDto) {
        return usersService.updateUser(userId, userDto);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<Users> users = usersService.login(request.getEmail(), request.getPassword());
        if(users.isPresent()) {
            return ResponseEntity.ok(users);
        } else {
            return new ResponseEntity<>("Invalid email or password", HttpStatus.BAD_REQUEST);
        }
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

    /*@PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO userDto) {
        return usersService.loginUser(userDto.getEmail(), userDto.getPassword());
    }*/

}