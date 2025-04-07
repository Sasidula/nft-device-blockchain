package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByName(String name);

    Users findByWalletAddress(String walletAddress);

    Users findByRole(Role role);

    Users findByPassword(String password);

    Users findByCreatedAt(Date createdAt);

    Users findByUserId(int userId);

    Users findByEmail(String email);
}
