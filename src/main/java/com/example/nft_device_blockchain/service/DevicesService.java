package com.example.nft_device_blockchain.service;

import com.example.nft_device_blockchain.data.Devices;
import com.example.nft_device_blockchain.data.DevicesRepository;
import com.example.nft_device_blockchain.data.SimpleNFT;
import com.example.nft_device_blockchain.data.Users;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.gas.StaticGasProvider;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Service
public class DevicesService {

    private final DevicesRepository devicesRepository;
    private final UsersService usersService;

    public DevicesService(DevicesRepository devicesRepository, UsersService usersService) {
        this.usersService = usersService;
        this.devicesRepository = devicesRepository;
    }

    public List<Devices> getAllDevices() {
        return devicesRepository.findAll();
    }

    public Optional<Devices> getDeviceById(int id) {
        return devicesRepository.findById(id);
    }

    public List<Devices> getDevicesByCurrentOwnerId(int userId) {
        return devicesRepository.findByCurrentOwner_User(userId);
    }

    /*public Devices createDevice(Devices device) {
        return devicesRepository.save(device);
    }*/

    public Devices createDevice(Devices device) {
        Credentials credentials = null;
        SimpleNFT contract = null;
        String walletAddress = null;
        try {
            // Connect to local Ganache instance (you can switch this to another network later)
            Web3j web3j = Web3j.build(new HttpService("http://127.0.0.1:7545")); // or use Infura/Matic for testnet

            // Load credentials from private key (simpler for local dev)
            String privateKey = "0x6248768a5ca4d0513240f8c377bea44279805ca7e33b0de9a1d8444a83fefedb"; // NEVER expose this in production
            credentials = Credentials.create(privateKey);

            // Load your deployed contract
            contract = SimpleNFT.load(
                    "0x9732E2e136446215Cb9AcA02740F649A252AC7bB", // Replace with your actual contract address
                    web3j,
                    credentials,
                    new StaticGasProvider(
                            BigInteger.valueOf(2_000_000_000L), // Gas price
                            BigInteger.valueOf(6_000_000)       // Gas limit
                    )
            );

            int userid = device.getCurrentOwner().getUser();

            Users user = usersService.getUserById(userid);

            // Mint NFT to current owner's wallet address
            walletAddress = user.getWalletAddress();

            if (walletAddress == null || walletAddress.isEmpty()) {
                throw new IllegalArgumentException("Wallet address cannot be null or empty");
            }

            TransactionReceipt receipt = contract.mint(walletAddress).send();

            // Fetch the newly minted token ID (tokenCounter - 1)
            BigInteger tokenId = contract.tokenCounter().send().subtract(BigInteger.ONE);

            // Optionally get token URI (if set)
            //String tokenURI = contract.tokenURI(tokenId).send();

            // Store the tokenId in the device
            device.setNftTokenId(tokenId.toString());

            //System.out.println("Token URI: " + tokenURI);

        } catch (Exception e) {
            System.err.println("Error during NFT minting: " + e.getMessage());
            System.out.println("Connecting to Web3...");
            System.out.println("Using wallet: " + credentials.getAddress());
            System.out.println("Loading contract...");
            System.out.println("Contract address: " + contract.getContractAddress());
            System.out.println("Calling mint for wallet: " + walletAddress);
            e.printStackTrace();
            throw new RuntimeException("Failed to mint NFT for device registration");
        }

        return devicesRepository.save(device);
    }


    public void deleteDevice(int id) {
        devicesRepository.deleteById(id);
    }

    public Devices updateDevice(Devices device) {
        devicesRepository.save(device);
        return device;
    }

    public Devices getDeviceByNftTokenId(String nftTokenId) {
        return devicesRepository.findByNftTokenId(nftTokenId);
    }

    public List<Devices> getDeviceBySerialNumber(String serialNumber) {
        return devicesRepository.findBySerialNumber(serialNumber);
    }

    public List<Devices> getDeviceByName(String name) {
        return devicesRepository.findByName(name);
    }

    public List<Devices> getDeviceByBrand(String brand) {
        return devicesRepository.findByBrand(brand);
    }

    public List<Devices> getDeviceByModelNumber(String modelNumber) {
        return devicesRepository.findByModelNumber(modelNumber);
    }

    public List<Devices> getDeviceByDeviceType(String deviceType) {
        return devicesRepository.findByDeviceType(deviceType);
    }

    public List<Devices> getDeviceByRegisteredBy(int registeredBy) {
        return devicesRepository.findByRegisteredBy(registeredBy);
    }

}
