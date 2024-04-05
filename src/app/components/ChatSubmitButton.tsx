"use client";
import { Button } from "@mui/material";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";
import { validateUserInput } from "../utils/utils";
import { Message, MessageHistory } from "../interfaces";

export default function ChatSubmitButton() {
  const {
    activeChat,
    setActiveChat,
    userChatInput,
    setUserChatInput,
    setUserInputError,
  } = useContext(AppContext);

  const handleSubmit = () => {
    const inputValidation = validateUserInput(userChatInput);
    if (inputValidation === "valid") {
      const newUserMsg: Message = { role: "user", content: userChatInput };
      setActiveChat((prev) => {
        if (prev) {
          return {
            ...prev,
            messages: [...prev.messages, newUserMsg],
          };
        }
      });
      // api call
      setUserChatInput("");
    } else {
      setUserInputError(inputValidation);
    }
  };

  return (
    <Button variant="contained" onClick={() => handleSubmit()}>
      Submit
    </Button>
  );
}
