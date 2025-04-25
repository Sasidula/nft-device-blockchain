package com.example.nft_device_blockchain.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    @Query("SELECT u FROM Users u WHERE u.name = ?1")
    List<Users> findByName(String name);

    @Query("SELECT u FROM Users u WHERE u.walletAddress = ?1")
    Users findByWalletAddress(String walletAddress);

    @Query("SELECT u FROM Users u WHERE u.userId = ?1")
    List<Users> findByUserId(int userId);

    @Query("SELECT u FROM Users u WHERE u.email = ?1")
    List<Users> findByEmail(String email);
}
