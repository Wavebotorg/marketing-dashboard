/* 
import React, { createContext, useState, useContext } from "react";
// import { createContext, useState } from "react";

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [isNavbar, setIsNavbar] = useState(false);

  return (
    <NavbarContext.Provider value={{ isNavbar, setIsNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};
 */

// SidebarContext.js

"use client";
import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
