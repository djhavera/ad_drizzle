import AmazingDapp from "./contracts/AmazingDapp.json";

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545'
    }
  },
  contracts: [AmazingDapp],
  events: {
    AmazingDapp: ["TaskCreated"],
  },
  polls: {
    accounts: 1500 /* 1.5 seconds polling for account changes in MetaMask */
  }
}

export default drizzleOptions
