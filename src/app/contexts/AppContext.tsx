"use client";
import React, { SetStateAction, createContext, useState } from "react";
import { Message, useChat } from "ai/react";
import { ChatRequestOptions } from "ai";
import { ConversationRepo } from "../classes/ConversationRepo";

interface AppContext {
  activeChatId: string;
  setActiveChatId: React.Dispatch<React.SetStateAction<string>>;
  userInputError: string;
  setUserInputError: React.Dispatch<React.SetStateAction<string>>;
  conversationRepo: ConversationRepo | undefined;
  setConversationRepo: React.Dispatch<
    SetStateAction<ConversationRepo | undefined>
  >;
  showConvView: boolean;
  setShowConvView: React.Dispatch<React.SetStateAction<boolean>>;
  useDarkMode: boolean;
  setUseDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  // OpenAI useChat
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  input: string;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
  error: Error | undefined;
}

export const AppContext = createContext<AppContext>({
  activeChatId: "",
  setActiveChatId: () => {},
  userInputError: "",
  setUserInputError: () => {},
  conversationRepo: undefined,
  setConversationRepo: () => {},
  showConvView: false,
  setShowConvView: () => {},
  useDarkMode: false,
  setUseDarkMode: () => {},
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
  const [activeChatId, setActiveChatId] = useState<string>("");
  const [userInputError, setUserInputError] = useState("");
  const [conversationRepo, setConversationRepo] = useState<
    ConversationRepo | undefined
  >();
  const [showConvView, setShowConvView] = useState(false);
  const [useDarkMode, setUseDarkMode] = useState(false);
  // OpenAI useChat
  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    error,
  } = useChat({
    onFinish() {
      // update convRepo from LS on finished transmission from AI
      const updatedHistory = window.localStorage.getItem("conversations");
      if (updatedHistory) {
        const updatedRepo = new ConversationRepo(JSON.parse(updatedHistory));
        setConversationRepo(updatedRepo);
      }
    },
  });

  return (
    <AppContext.Provider
      value={{
        activeChatId,
        setActiveChatId,
        userInputError,
        setUserInputError,
        conversationRepo,
        setConversationRepo,
        showConvView,
        setShowConvView,
        useDarkMode,
        setUseDarkMode,
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
