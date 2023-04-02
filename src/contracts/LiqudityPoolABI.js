
const lpABI =  [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "poolCreator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "claimAuctionFundsAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "enableWhiteList",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxAmountPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "onlyZkstHolders",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "sellToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountOfSellToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "swapRatio",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "internalType": "struct LP_ICO.Pool",
                "name": "pool",
                "type": "tuple"
            }
        ],
        "name": "FundsAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "poolCreator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "claimAuctionFundsAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "enableWhiteList",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxAmountPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "onlyZkstHolders",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "sellToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountOfSellToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "swapRatio",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "internalType": "struct LP_ICO.Pool",
                "name": "pool",
                "type": "tuple"
            }
        ],
        "name": "FundsRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "poolCreator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "claimAuctionFundsAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "enableWhiteList",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxAmountPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "onlyZkstHolders",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "sellToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountOfSellToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "swapRatio",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "internalType": "struct LP_ICO.Pool",
                "name": "pool",
                "type": "tuple"
            }
        ],
        "name": "FundsWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "poolCreator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "claimAuctionFundsAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "enableWhiteList",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxAmountPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "onlyZkstHolders",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "sellToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountOfSellToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "swapRatio",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "internalType": "struct LP_ICO.Pool",
                "name": "pool",
                "type": "tuple"
            }
        ],
        "name": "LiqiudityPoolCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "poolCreator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "claimAuctionFundsAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "enableWhiteList",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxAmountPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "onlyZkstHolders",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "sellToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountOfSellToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "swapRatio",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "internalType": "struct LP_ICO.Pool",
                "name": "pool",
                "type": "tuple"
            }
        ],
        "name": "LiqiudityPoolEnded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "TokensSwaped",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "calculatePrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "sellToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "swapRatio",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxAmountPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountOfSellToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endAuctionAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "claimAuctionFundsAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "onlyZkstHolders",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "enableWhiteList",
                        "type": "bool"
                    }
                ],
                "internalType": "struct LP_ICO.PoolReq",
                "name": "req",
                "type": "tuple"
            }
        ],
        "name": "create",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "swapToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "widthdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


export default lpABI;