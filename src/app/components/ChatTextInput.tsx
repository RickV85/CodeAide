"use client";
import { TextField, Box } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

export default function ChatTextInput() {
  const { userChatInput, setUserChatInput, userInputError, setUserInputError } =
    useContext(AppContext);

  const handleInput = (input: string) => {
    if (userInputError) {
      setUserInputError("");
    }
    setUserChatInput(input);
  };

  return (
    <Box
      sx={{
        padding: "1rem",
      }}
    >
      <TextField
        id="chatTextInput"
        multiline
        rows={6}
        placeholder="Enter question or response here"
        variant="outlined"
        fullWidth
        value={userChatInput}
        onChange={(e) => handleInput(e.target.value)}
        error={userInputError ? true : false}
        label={userInputError ? userInputError : null}
      />
    </Box>
  );
}
