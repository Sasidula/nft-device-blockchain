require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Ganache default RPC URL
      chain_id: 1377, // Ganache default chain ID
      accounts: [
        "6248768a5ca4d0513240f8c377bea44279805ca7e33b0de9a1d8444a83fefedb", // Private key
      ],
    },
  },
};