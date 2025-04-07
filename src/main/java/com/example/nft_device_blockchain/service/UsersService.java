package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.Role;
import com.example.nft_device_blockchain.data.Users;
import com.example.nft_device_blockchain.data.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
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

    public Users getUserById(Long userId) {
        return usersRepository.findById(userId).orElse(null);
    }

    public Users createUser(Users user) {
        return usersRepository.save(user);
    }

    public Users updateUser(Users user) {
        return usersRepository.save(user);
    }

    public void deleteUser(Long userId) {
        usersRepository.deleteById(userId);
    }

    public Users getUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }

    public Users getUserByWalletAddress(String walletAddress) {
        return usersRepository.findByWalletAddress(walletAddress);
    }

    public Users getUserByName(String name) {
        return usersRepository.findByName(name);
    }

    public Users getUserByRole(Role role) {
        return usersRepository.findByRole(role);
    }

    public Users getUserByPassword(String password) {
        return usersRepository.findByPassword(password);
    }

    public Users getUserByCreatedAt(Date createdAt) {
        return usersRepository.findByCreatedAt(createdAt);
    }

    public Users getUserByUserId(int userId) {
        return usersRepository.findByUserId(userId);
    }

}
