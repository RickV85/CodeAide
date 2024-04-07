import { Button } from "@mui/material";
import { Message } from "ai/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setMessages: (messages: Message[]) => void;
  setActiveChatId: Dispatch<SetStateAction<string>>;
}

export default function ChatResetButton({
  setMessages,
  setActiveChatId,
}: Props) {
  return (
    <Button
      variant="contained"
      onClick={() => {
        setMessages([]);
        setActiveChatId("");
      }}
    >
      New Chat
    </Button>
  );
}
