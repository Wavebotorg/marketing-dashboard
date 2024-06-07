"use client";
import React, { createContext, useContext, useState } from "react";

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [isNavbar, setIsNavbar] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  // console.log("🚀 ~ WalletProvider ~ email:", email)
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
        isNavbar,
        setIsNavbar,
        userProfile,
        setUserProfile
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
