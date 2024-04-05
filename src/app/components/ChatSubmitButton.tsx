"use client"
import { Button } from "@mui/material";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";
import { validateUserInput } from "../utils/utils";

export default function ChatSubmitButton() {
  const { userChatInput, setUserInputError } =
    useContext(AppContext);

  const handleSubmit = () => {
    const inputValidation = validateUserInput(userChatInput);
    if (inputValidation === "valid") {
      // fire api call
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
