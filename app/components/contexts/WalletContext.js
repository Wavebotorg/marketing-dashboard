"use client";
import React, { createContext, useContext, useState } from "react";

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [email, setEmail] = useState(null);
  console.log("🚀 ~ WalletProvider ~ email:", email)
  const [solanaAddress, setSolanaAddress] = useState(null);
  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        email,
        setEmail,
        solanaAddress,
        setSolanaAddress,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
