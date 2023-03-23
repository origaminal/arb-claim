require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const keys = process.env.PRIVATE_KEYS.split(/\s*,\s*/);

console.log(keys);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ARB_URL,
        // blockNumber: 22455358, // use this only with archival node
        enabled: true,
      },
      // allowUnlimitedContractSize: true,
      // loggingEnabled: false,
      // accounts: keys,
    },
    arb: {
      url: process.env.ARB_URL,
      chainId: 42161,
      accounts: keys,
    },
  },
};
