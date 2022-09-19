const { ethers, BigNumber } = require("ethers");
const { Addresses } = require("@dopex-io/sdk");
// ATLANTIC STRADDLES

// THE SPOON
const STRADDLES_INTERFACE = [
  "function purchase( uint256 amount,uint256 swapperId, address user) external whenNotPaused nonReentrant returns (uint256 tokenId)",
  "function balanceOf(address) external view returns (uint256",
];
const PREMIUM_TOKEN_INTERFACES = [
  " function approve(address spender, uint256 amount) public virtual override returns (bool)",
];

const MAX_VALUE = ethers.constants.MaxUint256;

// THE WAITER
const provider = process.env.ARBITRUM_PROVIDER;

// YOU
const signer = new ethers.Wallet(process.env.PRIVATE_KEY);

// THE SOUP
const STRADDLES_CONTRACT_ADDRESS = "";
// USDC
const PREMIUM_TOKEN_ADDRESS = "";

// THE BOWL
const STRADDLES_CONTRACT = new ethers.Contract(
  STRADDLES_CONTRACT_ADDRESS,
  STRADDLES_INTERFACE,
  signer
);

const PREMIUM_TOKEN_CONTRACT = new ethers.Contract(
  PREMIUM_TOKEN_ADDRESS,
  PREMIUM_TOKEN_INTERFACES,
  signer
);

// HOW MUCH CAN YOU TAKE?
const AMOUNT_OF_STRADDLES_TO_PURCHASE = 0;
const AMOUNT_OF_OPTIONS_PER_STRADDLE = 0;

const ALREADY_APPROVED_TOKENS_TO_CONTRACT = false;
const TWAP = false;
const TWAP_DURATION = 0;
// SLURP SLURP SLURP
(async () => {
  if (!ALREADY_APPROVED_TOKENS_TO_CONTRACT) {
    await PREMIUM_TOKEN_CONTRACT.approve(STRADDLES_CONTRACT_ADDRESS, MAX_VALUE);
  }

  if (TWAP) {
    setInterval(async () => {
      await STRADDLES_CONTRACT.purchase(
        AMOUNT_OF_OPTIONS_PER_STRADDLE,
        0,
        signer.address
      );
    }, TWAP_DURATION);
  } else {
    await STRADDLES_CONTRACT.purchase(
      AMOUNT_OF_OPTIONS_PER_STRADDLE,
      0,
      signer.address
    );
  }
})();
