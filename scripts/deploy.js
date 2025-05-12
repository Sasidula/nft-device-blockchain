const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners(); // ✅ works with Hardhat's injected ethers

    console.log("Deploying contract with the account:", await deployer.getAddress());

    const ContractFactory = await ethers.getContractFactory("SimpleNFT");
    const contract = await ContractFactory.deploy();

    await contract.waitForDeployment(); // v6 replaces contract.deployed()

    console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
