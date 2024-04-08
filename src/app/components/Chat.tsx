"use client";
import ChatContainer from "./ChatContainer";
import ChatTextInput from "./ChatTextInput";
import ChatSubmitButton from "./ChatSubmitButton";
import { validateUserInput } from "../utils/utils";
import { Grid } from "@mui/material";
import { useContext, useEffect, useRef, FormEvent } from "react";
import { AppContext } from "../contexts/AppContext";
import ChatResetButton from "./ChatResetButton";
import { ConversationRepo } from "../classes/ConversationRepo";

export default function Chat() {
  const {
    activeChatId,
    setActiveChatId,
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
    // Create conversations in LS to store chat history
    // or setConversationRepo with data on initial load
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
    // When messages state updates, create new or add to existing object
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
      if (activeId !== activeChatId) {
        setActiveChatId(activeId);
      }
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
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      height={"100%"}
    >
      <Grid item xs={8} width={"100%"} height={"66%"}>
        <ChatContainer />
      </Grid>
      <Grid item xs={4} width={"100%"} height={"33%"}>
        <form onSubmit={(e) => validateSubmit(e)}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            paddingBottom={"1rem"}
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
              <ChatResetButton
                setMessages={setMessages}
                setActiveChatId={setActiveChatId}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
