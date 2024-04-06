"use client";
import React, { createContext, useState } from "react";
import { Message, useChat } from "ai/react";
import { ChatRequestOptions } from "ai";

interface AppContext {
  activeChat: Message[] | undefined;
  setActiveChat: React.Dispatch<React.SetStateAction<Message[] | undefined>>;
  userInputError: string;
  setUserInputError: React.Dispatch<React.SetStateAction<string>>;
  // OpenAI useChat
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void
  error: Error | undefined;
}

export const AppContext = createContext<AppContext>({
  activeChat: undefined,
  setActiveChat: () => {},
  userInputError: "",
  setUserInputError: () => {},
  // OpenAI useChat
  messages: [],
  setMessages: () => {},
  input: "",
  handleInputChange: () => {},
  handleSubmit: () => {},
  error: undefined,
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [activeChat, setActiveChat] = useState<Message[] | undefined>(
    undefined
  );
  const [userInputError, setUserInputError] = useState("");
  // OpenAI useChat
  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    error,
  } = useChat();

  return (
    <AppContext.Provider
      value={{
        activeChat,
        setActiveChat,
        userInputError,
        setUserInputError,
        // OpenAI useChat
        messages,
        setMessages,
        input,
        handleInputChange,
        handleSubmit,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
