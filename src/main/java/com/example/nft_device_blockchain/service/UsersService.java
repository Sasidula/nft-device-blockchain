package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.UserDTO;
import com.example.nft_device_blockchain.data.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import static java.lang.Enum.valueOf;

@Service
public class UsersService {

    private final UsersRepository usersRepository;

    private final RetailerRepository retailerRepository;

    private final ConsumerRepository consumerRepository;

    public UsersService(UsersRepository usersRepository, RetailerRepository retailerRepository, ConsumerRepository consumerRepository) {
        this.usersRepository = usersRepository;
        this.consumerRepository = consumerRepository;
        this.retailerRepository = retailerRepository;
    }

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    public Users getUserById(int userId) {
        return usersRepository.findById(userId).orElse(null);
    }

    public ResponseEntity<?> registerUser(UserDTO userDTO) {
        Users user = new Users();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setWalletAddress(userDTO.getWalletAddress());
        user.setRole(userDTO.getRole());
        user.setCreatedAt(new Date());

        Users savedUser = usersRepository.save(user);

        switch (userDTO.getRole()) {
            case ADMIN:
                // Only user record, no more action
                break;

            case RETAILER:
                Retailer retailer = new Retailer();
                retailer.setUser(user);
                retailer.setAddress(userDTO.getAddress());
                retailer.setPhone(userDTO.getPhone());
                retailer.setService(userDTO.getService());
                retailerRepository.save(retailer);
                break;

            case CONSUMER:
                Consumer consumer = new Consumer();
                consumer.setUser(user);
                consumer.setAddress(userDTO.getAddress());
                consumer.setPhone(userDTO.getPhone());
                consumer.setWalletAddress(userDTO.getWalletAddress());
                consumerRepository.save(consumer);
                break;
        }

        Users createdUser = usersRepository.findById(savedUser.getUser()).orElse(null);

        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);

    }

    public ResponseEntity<?> updateUser(int id,UserDTO userDTO) {
        Optional<Users> optionalUser = usersRepository.findById(id);
        if (optionalUser.isEmpty()) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }

        Users user = optionalUser.get();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setWalletAddress(userDTO.getWalletAddress());
        user.setRole(userDTO.getRole());
        usersRepository.save(user);

        switch (user.getRole()) {
            case RETAILER:
                Optional<Retailer> optionalRetailer = retailerRepository.findByUser(user);
                if (optionalRetailer.isPresent()) {
                    Retailer retailer = optionalRetailer.get();
                    retailer.setAddress(userDTO.getAddress());
                    retailer.setPhone(userDTO.getPhone());
                    retailer.setService(userDTO.getService());
                    retailerRepository.save(retailer);
                }
                break;

            case CONSUMER:
                Optional<Consumer> optionalConsumer = consumerRepository.findByUser(user);
                if (optionalConsumer.isPresent()) {
                    Consumer consumer = optionalConsumer.get();
                    consumer.setAddress(userDTO.getAddress());
                    consumer.setPhone(userDTO.getPhone());
                    consumer.setWalletAddress(userDTO.getWalletAddress());
                    consumerRepository.save(consumer);
                }
                break;

            case ADMIN:
                // No extra entity to update
                break;
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }


    /*public Users createUser(Users user) {
        return usersRepository.save(user);
    }

    public Consumer createConsumer(Consumer consumer) {
        return consumerRepository.save(consumer);
    }

    public Retailer createRetailer(Retailer retailer) {
        return retailerRepository.save(retailer);
    }

    public Users updateUser(Users user) {
        return usersRepository.save(user);
    }*/

    public void deleteUser(int userId) {
        usersRepository.deleteById(userId);
    }

    public List<Users> getUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }

    public Users getUserByWalletAddress(String walletAddress) {
        return usersRepository.findByWalletAddress(walletAddress);
    }

    public List<Users> getUserByName(String name) {
        return usersRepository.findByName(name);
    }

    public List<Retailer> getAllRetailers() {
        return retailerRepository.findAll();
    }

    public List<Consumer> getAllConsumers() {
        return consumerRepository.findAll();
    }

    public ResponseEntity<?> loginUser(String email, String password) {
        List<Users> users = usersRepository.findByEmail(email);
        if (users.isEmpty()) {
            return new ResponseEntity<>("Invalid email", HttpStatus.UNAUTHORIZED);
        }

        Users user = users.get(0);
        if (!user.getPassword().equals(password)) {
            return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}