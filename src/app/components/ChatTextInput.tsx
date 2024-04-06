"use client";
import { TextField, Box } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { ChangeEvent, RefObject } from "react";

interface Props {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  chatSubmitBtnRef: RefObject<HTMLButtonElement>;
}

export default function ChatTextInput({
  input,
  handleInputChange,
  chatSubmitBtnRef,
}: Props) {
  const { userInputError, setUserInputError } = useContext(AppContext);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (userInputError) {
      setUserInputError("");
    }

    if (e.target instanceof HTMLInputElement) {
      handleInputChange(e as ChangeEvent<HTMLInputElement>);
    } else if (e.target instanceof HTMLTextAreaElement) {
      handleInputChange(e as ChangeEvent<HTMLTextAreaElement>);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey && chatSubmitBtnRef.current !== null) {
      e.preventDefault();
      chatSubmitBtnRef.current.click();
    }
  };

  return (
    <Box
      sx={{
        padding: "1rem",
      }}
    >
      <TextField
        id="chatTextInput"
        name="chatTextInput"
        multiline
        rows={6}
        placeholder="Enter question or response here"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => {
          handleInput(e);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
        error={userInputError ? true : false}
        label={userInputError ? userInputError : null}
      />
    </Box>
  );
}
