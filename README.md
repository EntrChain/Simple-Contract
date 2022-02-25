## Sources
 [Part 1 Contract](https://dev.to/kevinmaarek/getting-started-with-solidity-your-first-smart-contract-3mpe)
 [Part 2 Testing](https://dev.to/kevinmaarek/testing-your-smart-contract-with-truffle-3g6f)
 [Part 3 Deployment](https://dev.to/kevinmaarek/deploy-your-smart-contracts-with-truffle-1igl)

## Dependencies

 - [Truffle](https://www.npmjs.com/package/truffle) (npm i -g truffle)
 - [Ganache](https://trufflesuite.com/ganache/)
 - [Hdwallet Provider](https://www.npmjs.com/package/@truffle/hdwallet-provider) (npm install --save truffle-hdwallet-provider)

## Deployment

 1. Create a .secret file and put your mnemonic on this file.
 2. Change truffle-config.js file line 22 => `const apiKey =  "<Your Api Key>";` with your api key. ([infura.io](https://infura.io/))
 3. Then run `truffle deploy --network ropsten`
