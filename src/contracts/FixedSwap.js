export const fixedSwapABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "transactionFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zkstTransactionFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zkstTokenMinHolding",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "zkstTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "zkstHubWallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "usdc",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FeeCalculated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimAuctionFundsAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "enableWhiteList",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerWallet",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "onlyZkstHolders",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sellToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountOfSellToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapRatio",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUSDC",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct LP_ICO.Pool",
        name: "pool",
        type: "tuple",
      },
    ],
    name: "FundsAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimAuctionFundsAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "enableWhiteList",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerWallet",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "onlyZkstHolders",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sellToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountOfSellToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapRatio",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUSDC",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct LP_ICO.Pool",
        name: "pool",
        type: "tuple",
      },
    ],
    name: "FundsRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimAuctionFundsAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "enableWhiteList",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerWallet",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "onlyZkstHolders",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sellToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountOfSellToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapRatio",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUSDC",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct LP_ICO.Pool",
        name: "pool",
        type: "tuple",
      },
    ],
    name: "LiqiudityPoolCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimAuctionFundsAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "enableWhiteList",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerWallet",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "onlyZkstHolders",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sellToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountOfSellToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapRatio",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUSDC",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct LP_ICO.Pool",
        name: "pool",
        type: "tuple",
      },
    ],
    name: "LiqiudityPoolEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "TokensSwaped",
    type: "event",
  },
  {
    inputs: [],
    name: "_config",
    outputs: [
      {
        internalType: "uint256",
        name: "transactionFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zkstTransactionFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zkstTokenMinHolding",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "zkstTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "zkstHubWallet",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "addBidInUSDC",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapRatio",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "calculateAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "funds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "txFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "div",
        type: "uint256",
      },
    ],
    name: "calculateFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimAuctionFundsAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "enableWhiteList",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerWallet",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "onlyZkstHolders",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sellToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountOfSellToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapRatio",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUSDC",
            type: "bool",
          },
        ],
        internalType: "struct LP_ICO.Pool",
        name: "pool",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "whiteList",
        type: "address[]",
      },
    ],
    name: "create",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimAuctionFundsAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "enableWhiteList",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerWallet",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "onlyZkstHolders",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sellToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountOfSellToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapRatio",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUSDC",
            type: "bool",
          },
        ],
        internalType: "struct LP_ICO.Pool",
        name: "pool",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "whiteList",
        type: "address[]",
      },
    ],
    name: "createLiquidityPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ehterStakedByUsers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ethCollectedForPoolOwner",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPools",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimAuctionFundsAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "enableWhiteList",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerWallet",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "onlyZkstHolders",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sellToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountOfSellToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapRatio",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUSDC",
            type: "bool",
          },
        ],
        internalType: "struct LP_ICO.Pool[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getPoolByIndex",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAuctionAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimAuctionFundsAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "enableWhiteList",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "maxAmountPerWallet",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "onlyZkstHolders",
            type: "bool",
          },
          {
            internalType: "address",
            name: "sellToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountOfSellToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapRatio",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUSDC",
            type: "bool",
          },
        ],
        internalType: "struct LP_ICO.Pool",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getZkstAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolOwners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "sellTokenCollected",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "sendFundsToPoolCreator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "Zkst",
        type: "address",
      },
    ],
    name: "updateZkstAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "txFee",
        type: "uint256",
      },
    ],
    name: "updateZkstTransactionFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "txFee",
        type: "uint256",
      },
    ],
    name: "updateTransactionFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "whitelist",
        type: "address[]",
      },
    ],
    name: "updateWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "userWithDrawFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "whiteLists",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "withdrawUnSoldTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const fixedSwapContractAddress =
  "0xea";
export const fujiSwapAddress = "0x";
export const mainnetContractAddress = "0x";
export const sepoliaSwapAddress = "0xBa36CEc803198De4959089aaB7686A209B6430f8";
export const zkSyncTestnetSwapAddress = "0x297196873852c0B21E0323CA92eED887552d2cfd";