"use client";
import React, { SetStateAction, createContext, useState } from "react";
import { Message, useChat } from "ai/react";
import { ChatRequestOptions } from "ai";
import { ConversationRepo } from "../classes/ConversationRepo";

interface AppContext {
  activeChat: Message[] | undefined;
  setActiveChat: React.Dispatch<React.SetStateAction<Message[] | undefined>>;
  userInputError: string;
  setUserInputError: React.Dispatch<React.SetStateAction<string>>;
  conversationRepo: ConversationRepo | undefined;
  setConversationRepo: React.Dispatch<
    SetStateAction<ConversationRepo | undefined>
  >;
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
  activeChat: undefined,
  setActiveChat: () => {},
  userInputError: "",
  setUserInputError: () => {},
  conversationRepo: undefined,
  setConversationRepo: () => {},
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
  const [conversationRepo, setConversationRepo] = useState<
    ConversationRepo | undefined
  >();
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
        activeChat,
        setActiveChat,
        userInputError,
        setUserInputError,
        conversationRepo,
        setConversationRepo,
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
