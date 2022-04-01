import React, { useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";
import abi from "../utils/ContractABI.json";
import redListAddresses from "../web3utils/whitelist";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

import walletLinkModule from "@web3-onboard/walletlink";
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import Onboard from "@web3-onboard/core";
import { use } from "chai";

export const TransactionContext = React.createContext();

export default function TransactionProvider({ children }) {
  const [web3Provider, setWeb3Provider] = useState("");
  const [address, setAddress] = useState("");
  const [connected, setConnection] = useState();
  const [amount, setAmount] = useState(1);
  const [walletQuanity, setWalletQuanity] = useState();
  const [redList, setRedList] = useState();
  const [isOgMintActive, setOgMintActive] = useState(false);
  const [isPublicMintActive, setPublicMintActive] = useState(false);
  const [collectionSize, setCollectionSize] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [isOnWhiteList, setIsOnWhiteList] = useState();
  const [transaction, setTransaction] = useState();

  const contractABI = abi;
  const contractAddress = "0xC1a2f17A31E8Fb8C45aAcc8c62C099339Ab89d0A";

  const buildRedList = () => {
    const leaves = redListAddresses.map((address) => keccak256(address));
    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    const redObj = {};
    for (let i = 0; i < redListAddresses.length; i++) {
      let hashAddressFor = keccak256(redListAddresses[i]);
      let forProof = tree.getHexProof(hashAddressFor);
      redObj[redListAddresses[i].toUpperCase()] = forProof;
    }
    setRedList(redObj);
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
    e.preventDefault();
  };

  const handleIncrementClick = () => {
    if (amount >= 0 && amount < 10) {
      setAmount(amount + 1);
    }
  };

  const handleDecrementClick = () => {
    if (amount > 0 && amount !== 1) {
      setAmount(amount - 1);
    }
  };

  const handleFreeIncrementClick = () => {
    if (amount >= 0 && amount < 2) {
      setAmount(amount + 1);
    }
  };

  const handleFreeDecrementClick = () => {
    if (amount > 0 && amount !== 1) {
      setAmount(amount - 1);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!web3Provider) return;
      const accounts = await web3Provider.accounts();
      if (accounts.length >= 0) {
        setAddress(accounts[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = useCallback(async () => {
    const walletConnect = walletConnectModule();
    const injected = injectedModule();

    const onboard = Onboard({
      wallets: [walletConnect, injected], // created in previous step
      chains: [
        {
          id: "0x1", // chain ID must be in hexadecimel
          token: "ETH",
          namespace: "evm",
          label: "Ethereum Mainnet",
          rpcUrl:
            "https://mainnet.infura.io/v3/6657bc7a8c3c4902ac11d77dfdcb57c5",
        },
        // {
        //   id: "0x4",
        //   token: "rETH",
        //   namespace: "evm",
        //   label: "Ethereum Rinkeby Testnet",
        //   rpcUrl:
        //     "https://rinkeby.infura.io/v3/a18dd7c3eb2b463ea69bfefdea0247c9",
        // },
      ],
      appMetadata: {
        name: "Welcome To The 0xSocialClub",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        description: "My app using Onboard",
        recommendedInjectedWallets: [
          // { name: "Coinbase", url: "https://wallet.coinbase.com/" },
          { name: "MetaMask", url: "https://metamask.io" },
        ],
      },
    });
    try {
      const wallets = await onboard.connectWallet();
      console.log(wallets);
      const { accounts, provider } = wallets[0];

      buildRedList();
      if (accounts) setAddress(accounts[0].address);
      setWeb3Provider(provider);
      console.log(web3Provider);

      if (web3Provider) {
        setConnection(true);
      }
    } catch (error) {
      console.log(error);
    }
  });

  const disconnectWallet = useCallback(async () => {
    const walletConnect = walletConnectModule();
    const injected = injectedModule();

    const onboard = Onboard({
      wallets: [walletConnect, injected], // created in previous step
      chains: [
        {
          id: "0x1", // chain ID must be in hexadecimel
          token: "ETH",
          namespace: "evm",
          label: "Ethereum Mainnet",
          rpcUrl:
            "https://mainnet.infura.io/v3/6657bc7a8c3c4902ac11d77dfdcb57c5",
        },
        // {
        //   id: "0x4",
        //   token: "rETH",
        //   namespace: "evm",
        //   label: "Ethereum Rinkeby Testnet",
        //   rpcUrl:
        //     "https://rinkeby.infura.io/v3/a18dd7c3eb2b463ea69bfefdea0247c9",
        // },
      ],
      appMetadata: {
        name: "Welcome To The 0xSocialClub",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        description: "My app using Onboard",
        recommendedInjectedWallets: [
          // { name: "Coinbase", url: "https://wallet.coinbase.com/" },
          { name: "MetaMask", url: "https://metamask.io" },
        ],
      },
    });

    try {
      const [primaryWallet] = await onboard.state.get().wallets;
      if (primaryWallet)
        await onboard.disconnectWallet({ label: primaryWallet.label });
      refreshState();
    } catch (error) {
      console.log(error);
    }
  });

  const refreshState = () => {
    setAddress("");
    setWeb3Provider();
  };

  const publicTransaction = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(web3Provider);
    const signer = provider.getSigner();
    const publicSaleTransaction = (amount * 0.02).toFixed(2).toString();
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    try {
      await transactionContract.publicSaleMint(amount, {
        value: ethers.utils.parseEther(publicSaleTransaction)._hex,
      });
    } catch (error) {
      console.log(error);
    }
  });

  const freeMintTransaction = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(web3Provider);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );


    try {
      await transactionContract.ogMint(amount, redList[address.toUpperCase()]);
    } catch (error) {
      console.log(error);
    }
  });

  const checkCollectionSizeAndSupply = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://mainnet.infura.io/v3/6657bc7a8c3c4902ac11d77dfdcb57c5"
      );
      const transactionContract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );
      let collection = await transactionContract.actualCollectionSize();
      setCollectionSize(collection.toString());
      let supply = await transactionContract.totalSupply();
      setTotalSupply(supply.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const checkOgMintActive = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://mainnet.infura.io/v3/6657bc7a8c3c4902ac11d77dfdcb57c5"
      );
      const transactionContract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );
      let isActive = await transactionContract.ogMintActive();
      setOgMintActive(isActive);
    } catch (error) {
      console.log(error);
    }
  };

  const checkPublicMintActive = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://mainnet.infura.io/v3/6657bc7a8c3c4902ac11d77dfdcb57c5"
      );
      const transactionContract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );
      let isActive = await transactionContract.publicSaleActive();
      setPublicMintActive(isActive);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkCollectionSizeAndSupply();
  }, [checkCollectionSizeAndSupply]);

  useEffect(() => {
    checkOgMintActive();
  }, [checkOgMintActive]);

  useEffect(() => {
    checkPublicMintActive();
  }, [checkPublicMintActive]);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

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
        walletQuanity,
        disconnectWallet,
        connected,
        amount,
        handleIncrementClick,
        handleDecrementClick,
        handleInputChange,
        publicTransaction,
        freeMintTransaction,
        handleFreeIncrementClick,
        handleFreeDecrementClick,
        isOgMintActive,
        isPublicMintActive,
        collectionSize,
        totalSupply,
      }}
    >
      {children}]{" "}
    </TransactionContext.Provider>
  );
}
