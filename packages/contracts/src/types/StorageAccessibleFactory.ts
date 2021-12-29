/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StorageAccessible } from "./StorageAccessible";

export class StorageAccessibleFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<StorageAccessible> {
    return super.deploy(overrides || {}) as Promise<StorageAccessible>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StorageAccessible {
    return super.attach(address) as StorageAccessible;
  }
  connect(signer: Signer): StorageAccessibleFactory {
    return super.connect(signer) as StorageAccessibleFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StorageAccessible {
    return new Contract(address, _abi, signerOrProvider) as StorageAccessible;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "getStorageAt",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "calldataPayload",
        type: "bytes",
      },
    ],
    name: "simulateAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610258806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635624b25b1461003b578063b4faba09146100d3575b600080fd5b61005e6004803603604081101561005157600080fd5b508035906020013561018b565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610098578181015183820152602001610080565b50505050905090810190601f1680156100c55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610189600480360360408110156100e957600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561011457600080fd5b82018360208201111561012657600080fd5b8035906020019184600183028401116401000000008311171561014857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101ff945050505050565b005b606060008260200267ffffffffffffffff811180156101a957600080fd5b506040519080825280601f01601f1916602001820160405280156101d4576020820181803683370190505b50905060005b838110156101f757848101546020808302840101526001016101da565b509392505050565b600080825160208401855af480600052503d6020523d600060403e60403d016000fdfea2646970667358221220d62acfb2ed26ef8ab6509381ac0832b6406d39482ba129beb558f61185d41e8964736f6c63430007060033";