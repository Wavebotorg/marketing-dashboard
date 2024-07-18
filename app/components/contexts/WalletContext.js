"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";
import Profiles from "../../../public/assets/profile.png";

import { useMediaQuery } from "@mui/material";

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [isNavbar, setIsNavbar] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  // console.log("🚀 ~ WalletProvider ~ email:", email)
  const [solanaAddress, setSolanaAddress] = useState(null);
  const [imageSrc, setImageSrc] = useState(Profiles);

  const isXlScreen = useMediaQuery("(min-width: 1280px)"); // xl screen size
  const is2XlScreen = useMediaQuery("(min-width: 1536px)"); // 2xl screen size

  useEffect(() => {
    if (isXlScreen || is2XlScreen) {
      setIsNavbar(true);
    }
  }, [isXlScreen, is2XlScreen]);

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
        setUserProfile,
        imageSrc,
        setImageSrc,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
