import React, { useEffect, useState, useReducer, useCallback } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const TransactionContext = React.createContext(); 

export function TransactionProvider({children}) {
    const [web3Provider, setWeb3Provider] = useState("");
    const [address, setAddress] = useState("");
    const [connected, setConnection] = useState(false);
  
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "467de939967c40fca0c9e01088deb3ab", // required
        },
      },
    };
  
    const web3Modal = new Web3Modal({
      network: "rinkeby", // optional
      cacheProvider: true, // optional
      disableInjectedProvider: false,
      providerOptions, // required
    });

    const connectWallet = async () => {
        try {
          const provider = await web3Modal.connect();
          const web3 = new Web3(provider);
          const selectedAddress = web3._provider.selectedAddress;
    
          setWeb3Provider(provider);
          setAddress(selectedAddress);
          setConnection(true);
        } catch (error) {
          console.log(error);
        }
      };

      return (
          <TransactionContext.Provider value={{connectWallet}} >
              {children}
          </TransactionContext.Provider>
      )
}