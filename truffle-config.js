const path = require("path");

module.exports = {
  //contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  contracts_build_directory: path.join(__dirname, "src/configs/contracts"),
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    }
  }
};
