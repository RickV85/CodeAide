"use client";
import React, { createContext, useState } from "react";

interface AppContext {
  activeChat: string;
  setActiveChat: React.Dispatch<React.SetStateAction<string>>;
  userChatInput: string;
  setUserChatInput: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContext>({
  activeChat: "",
  setActiveChat: () => {},
  userChatInput: "",
  setUserChatInput: () => {},
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [activeChat, setActiveChat] = useState("");
  const [userChatInput, setUserChatInput] = useState("");
  return (
    <AppContext.Provider
      value={{ activeChat, setActiveChat, userChatInput, setUserChatInput }}
    >
      {children}
    </AppContext.Provider>
  );
};
