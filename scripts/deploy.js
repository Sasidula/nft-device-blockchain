const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying with:", deployer.address);

    const SimpleNFT = await ethers.getContractFactory("SimpleNFT");
    const contract = await SimpleNFT.deploy();
    await contract.waitForDeployment();

    const address = await contract.getAddress();
    console.log("Contract deployed to:", address);

    const output = { contractAddress: address };
    fs.writeFileSync(path.join(__dirname, "../deployed-contract.json"), JSON.stringify(output, null, 2));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

//npx hardhat run scripts/deploy.js --network ganache