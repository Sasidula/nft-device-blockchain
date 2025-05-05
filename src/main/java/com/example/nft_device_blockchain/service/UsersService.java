package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.Consumer;
import com.example.nft_device_blockchain.data.Retailer;
import com.example.nft_device_blockchain.data.Users;
import com.example.nft_device_blockchain.data.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {

    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    public Users getUserById(int userId) {
        return usersRepository.findById(userId).orElse(null);
    }

    public Users createUser(Users user) {
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
    }

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
}
