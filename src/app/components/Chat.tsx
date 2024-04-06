"use client";
import ChatContainer from "./ChatContainer";
import ChatTextInput from "./ChatTextInput";
import ChatSubmitButton from "./ChatSubmitButton";
import { validateUserInput } from "../utils/utils";
import { Grid } from "@mui/material";
import { useChat } from "ai/react";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../contexts/AppContext";
import { FormEvent } from "react";
import ChatResetButton from "./ChatResetButton";

export default function Chat() {
  const {
    activeChat,
    setActiveChat,
    setUserInputError,
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    error,
  } = useContext(AppContext);
  const chatSubmitBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Create conversations in LS to story chat history
    const history = window.localStorage.getItem("conversations");
    if (!history) {
      window.localStorage.setItem("conversations", "{}");
    }
  }, []);

  useEffect(() => {
    // Keep activeChat updated with messages from API
    if (activeChat !== messages) {
      setActiveChat(messages);
    }
  }, [activeChat, messages, setActiveChat]);

  useEffect(() => {
    // When activeChat updates with new messages,
    // create new object in LS conversations and update as new messages are created
    const history = window.localStorage.getItem("conversations");
    if (activeChat?.length && history) {
      const conversations = JSON.parse(history);
      const activeId = activeChat[0]?.id;
      conversations[activeId] = activeChat;
      window.localStorage.setItem(
        "conversations",
        JSON.stringify(conversations)
      );
    }
  }, [activeChat]);

  const validateSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get FormData from chatTextInput
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get("chatTextInput");

    // Validate the user input before sending to OpenAI,
    // show error to user if invalid and do not submit
    if (typeof inputValue === "string") {
      const inputValidation = validateUserInput(inputValue);
      if (inputValidation === "valid") {
        handleSubmit(e);
      } else {
        setUserInputError(inputValidation);
      }
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Grid item xs={12} sx={{ width: "100%" }}>
        <ChatContainer messages={messages} chatError={error} />
      </Grid>
      <Grid item xs={12} sx={{ width: "100%" }}>
        <form onSubmit={(e) => validateSubmit(e)}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={12} sx={{ width: "100%" }}>
              <ChatTextInput
                input={input}
                handleInputChange={handleInputChange}
                chatSubmitBtnRef={chatSubmitBtnRef}
              />
            </Grid>
            <Grid item xs={12} marginBottom="1rem">
              <ChatSubmitButton chatSubmitBtnRef={chatSubmitBtnRef} />
            </Grid>
            <Grid item xs={12}>
              <ChatResetButton setMessages={setMessages} />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
