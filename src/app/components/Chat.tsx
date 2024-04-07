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
import { ConversationRepo } from "../classes/ConversationRepo";

export default function Chat() {
  const {
    // activeChat,
    // setActiveChat,
    setUserInputError,
    conversationRepo,
    setConversationRepo,
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
  } = useContext(AppContext);
  const chatSubmitBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Create conversations in LS to story chat history
    // or setConversationRepo with data on inital load
    const history = window.localStorage.getItem("conversations");
    if (history && !conversationRepo) {
      const parsedHistory = JSON.parse(history);
      const repoFromStorage = new ConversationRepo(parsedHistory);
      setConversationRepo(repoFromStorage);
    } else if (!history && !conversationRepo) {
      window.localStorage.setItem("conversations", "{}");
      setConversationRepo(new ConversationRepo({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
  // When messages updates with new messages, create new or add to existing object
  // in LS conversations and update as new messages are created
    const history = window.localStorage.getItem("conversations");
    if (messages?.length && history) {
      const conversations = JSON.parse(history);
      const activeId = messages[0]?.id;
      conversations[activeId] = messages;
      window.localStorage.setItem(
        "conversations",
        JSON.stringify(conversations)
      );
    }
  }, [messages]);

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
        <ChatContainer />
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
