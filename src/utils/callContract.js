import {
  fixedSwapABI,
  fixedSwapContractAddress,
  fujiSwapAddress,
  mainnetContractAddress,
  sepoliaSwapAddress,
  zkSyncTestnetSwapAddress
} from "../contracts/FixedSwap";
import coinABI from "../contracts/ERC20ABI";
import { useContext } from "react";
import { toast } from "react-toastify";

export async function getPoolById(index, web3) {
  let response = await determineContractAddress(web3);
  if (!!response) {
    const fixedSwapContract = new web3.eth.Contract(
      fixedSwapABI,
      response.address
    );
    const data = await fixedSwapContract.methods.getPoolByIndex(index).call();
    return data;
  }
}

export const approveTokenTransafer = async (
  tokenAllocation,
  address,
  web3,
  toFixed
) => {
  let response = await determineContractAddress(web3);
  if (!!response) {
    const usdcAddress =
      response.net == 43114 ? "0xc7198437980c041c805a1edcba50c1ce5db95118" : "0x3d1df20a1f4f147d5597c59161a34cbf9b2b5023";
    const coinContract = new web3.eth.Contract(coinABI, usdcAddress);

    return await coinContract.methods
      .approve(response.address, toFixed(tokenAllocation).toString())
      .send({ from: address });
  }
};

export const usdcAddBid = async (web3, index, amount, price, address) => {
  let response = await determineContractAddress(web3);
  console.log(response);
  if (!!response) {
    const contract = new web3.eth.Contract(fixedSwapABI, response.address);
    return await contract.methods
      .addBidInUSDC(index, amount, price)
      .send({ from: address });
  }
};

export const getUsdcBalance = async (address, web3) => {
  let response = await determineContractAddress(web3);
  if (!!response) {
    const usdcAddress =
      response.net == 43114 ? "0xc7198437980c041c805a1edcba50c1ce5db95118" : "0x3d1df20a1f4f147d5597c59161a34cbf9b2b5023";
    const contract = new web3.eth.Contract(coinABI, usdcAddress);
    return await contract.methods.balanceOf(address).call();
  }
};

export const determineContractAddress = async (web3) => {
  const response = await web3.eth.net.getId();
  switch (response) {
    case 4:
      return { address: fixedSwapContractAddress, net: response };
    case 43114:
      return { address: mainnetContractAddress, net: response };
    case 43113:
      return { address: fujiSwapAddress, net: response };
    case 11155111:
      return { address: sepoliaSwapAddress, net: response };
      case 280:
        return { address: zkSyncTestnetSwapAddress, net: response };
    default:
      return false;
  }
};

export const withDrawUnSoldTokens = async (poolId, web3, address) => {
  let response = await determineContractAddress(web3);
  const contract = new web3.eth.Contract(fixedSwapABI, response.address);
  try {
    await contract.methods.withdrawUnSoldTokens(poolId).send({ from: address });
    toast.success("Withdraw successfully");
  } catch (e) {
    toast.error("You already Withdrew funds");
  }
};
