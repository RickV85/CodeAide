"use client";
import React, { createContext, useState } from "react";
import { MessageHistory } from "../interfaces";

interface AppContext {
  activeChat: MessageHistory | undefined;
  setActiveChat: React.Dispatch<
    React.SetStateAction<MessageHistory | undefined>
  >;
  userChatInput: string;
  setUserChatInput: React.Dispatch<React.SetStateAction<string>>;
  userInputError: string;
  setUserInputError: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContext>({
  activeChat: undefined,
  setActiveChat: () => {},
  userChatInput: "",
  setUserChatInput: () => {},
  userInputError: "",
  setUserInputError: () => {},
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [activeChat, setActiveChat] = useState<MessageHistory | undefined>({
    messages: [],
  });
  const [userChatInput, setUserChatInput] = useState("");
  const [userInputError, setUserInputError] = useState("");
  return (
    <AppContext.Provider
      value={{
        activeChat,
        setActiveChat,
        userChatInput,
        setUserChatInput,
        userInputError,
        setUserInputError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
