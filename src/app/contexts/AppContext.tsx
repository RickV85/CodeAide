"use client";
import React, { createContext, useState } from "react";
import { Message } from "ai/react";

interface AppContext {
  activeChat: Message[] | undefined;
  setActiveChat: React.Dispatch<React.SetStateAction<Message[] | undefined>>;
  userInputError: string;
  setUserInputError: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContext>({
  activeChat: undefined,
  setActiveChat: () => {},
  userInputError: "",
  setUserInputError: () => {},
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [activeChat, setActiveChat] = useState<Message[] | undefined>(
    undefined
  );
  const [userInputError, setUserInputError] = useState("");
  return (
    <AppContext.Provider
      value={{
        activeChat,
        setActiveChat,
        userInputError,
        setUserInputError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
