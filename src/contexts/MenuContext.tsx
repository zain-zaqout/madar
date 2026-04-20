"use client";
import { createContext, useContext, useState } from "react";

export const ContextMenu = createContext();

export const MenuContext = ({ children }) => {
  const [Menuu, setMenu] = useState(false);
  return (
    <ContextMenu.Provider value={{ Menuu, setMenu }}>
      {children}
    </ContextMenu.Provider>
  );
};
export const useMenu = () => useContext(ContextMenu);