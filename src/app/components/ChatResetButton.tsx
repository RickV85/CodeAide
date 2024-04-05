import { Button } from "@mui/material";
import { Message } from "ai/react";

interface Props {
  setMessages: (messages: Message[]) => void;
}

export default function ChatResetButton({ setMessages }: Props) {
  return (
    <Button variant="contained" onClick={() => setMessages([])}>
      Reset Chat
    </Button>
  );
}
