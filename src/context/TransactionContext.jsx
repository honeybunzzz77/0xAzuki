import React, { useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import abi from "../utils/ContractABI.json";

export const TransactionContext = React.createContext();

export default function TransactionProvider({ children }) {
  const [web3Provider, setWeb3Provider] = useState("");
  const [address, setAddress] = useState("");
  const [connected, setConnection] = useState(false);
  const [amount, setAmount] = useState(1);
  const contractABI = abi;
  const contractAddress = "0x4294854B0924aabcdeE463E9dbCB87934Ca8af79";

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: import.meta.env.VITE_INFURA_ID, // required
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "rinkeby", // optional
    cacheProvider: false, // optional
    disableInjectedProvider: false,
    providerOptions, // required
  });

  const handleInputChange = (e) => {
    setAmount(e.target.value);
    e.preventDefault();
  };

  const handleIncrementClick = () => {
    if (amount >= 0 && amount < 25) {
      setAmount(amount + 1);
    }
  };

  const handleDecrementClick = () => {
    if (amount > 0 && amount !== 1) {
      setAmount(amount - 1);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!web3Provider) return;
      const accounts = await provider.listAccounts();
      if (accounts.length >= 0) {
        setAddress(accounts[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = useCallback(async () => {
    try {
      const provider = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const address = web3Provider.provider.selectedAddress;

      console.log("provider", provider);
      setConnection(true);
      setWeb3Provider(provider);
      setAddress(address);
    } catch (error) {
      console.log(error);
    }
  });

  const disconnectWallet = useCallback(async () => {
    setConnection(false);
    setAddress(null);
    try {
      web3Modal.clearCachedProvider();
      if (
        web3Provider?.disconnect &&
        typeof web3Provider.disconnect === "function"
      ) {
        await web3Provider.disconnect();
      }
      setWeb3Provider(web3Provider);
    } catch (error) {
      console.log(error);
    }
  });

  const sendTransaction = useCallback(async () => {
    const signer = web3Provider.getSigner();
    const publicSaleTransaction = (amount * 0.01).toFixed(2).toString();
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    try {
      if (connected) {
        await transactionContract.publicSaleMint(amount, {
          value: ethers.utils.parseEther(publicSaleTransaction)._hex,
        });
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [connectWallet]);

  useEffect(() => {
    if (web3Provider?.on) {
      const handleAccountsChanged = (accounts) => {
        // eslint-disable-next-line no-console
        setAddress(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        window.location.reload();
      };

      const handleDisconnect = (error) => {
        // eslint-disable-next-line no-console
        console.log("disconnect", error);
        disconnectWallet();
      };

      web3Provider.on("accountsChanged", handleAccountsChanged);
      web3Provider.on("chainChanged", handleChainChanged);
      web3Provider.on("disconnect", handleDisconnect);

      return () => {
        if (web3Provider.removeListener) {
          web3Provider.removeListener("accountsChanged", handleAccountsChanged);
          web3Provider.removeListener("chainChanged", handleChainChanged);
          web3Provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        address,
        disconnectWallet,
        connected,
        amount,
        handleIncrementClick,
        handleDecrementClick,
        handleInputChange,
        sendTransaction
      }}
    >
      {children}
]    </TransactionContext.Provider>
  );
}
