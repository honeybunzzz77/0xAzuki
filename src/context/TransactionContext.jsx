import React, {
  useEffect,
  useState,
  useReducer,
  useCallback,
  useContext,
} from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const TransactionContext = React.createContext();
const TransactionUpdate = React.createContext();

export function useTransactionContext() {
  return useContext(TransactionContext);
}

export function useTransactionUpdate() {
  return useContext(TransactionUpdate);
}

export default function TransactionProvider({ children }) {
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
    <TransactionContext.Provider value={connected}>
      <TransactionUpdate.Provider value={connectWallet}>
        {children}
      </TransactionUpdate.Provider>
    </TransactionContext.Provider>
  );
}
