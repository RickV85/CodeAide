"use client";
import { Box, Typography, useTheme, Divider } from "@mui/material";
import { Message } from "ai/react";

interface Props {
  messages: Message[];
}

export default function ChatContainer({ messages }: Props) {
  const theme = useTheme();

  const renderActiveChat = () => {
    if (messages.length) {
      const chatDisplay = messages.map((msg, i) => {
        console.log(msg);
        return (
          <Box key={`msg-${i}`} sx={{ marginBottom: "1rem" }}>
            <Typography>{msg.content}</Typography>
          </Box>
        );
      });
      return chatDisplay;
    }
  };

  return (
    <Box
      sx={{
        height: "50vh",
        margin: "1rem",
        padding: "0.5rem",
        overflowY: "auto",
        backgroundColor: "background.paper",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "4px",
      }}
    >
      <Box>
        <Typography variant="h6" component={"h2"} textAlign="center">
          {messages.length ? "CodeAide Conversation" : "Welcome to CodeAide!"}
        </Typography>
        <Divider variant="middle" />
        <Box marginTop="1rem">
          {messages.length ? (
            renderActiveChat()
          ) : (
            <Typography
              variant="body1"
              textAlign="center"
            >
              {`I'm specifically designed to assist you with coding challenges or
            questions like a mentor or teacher would. I'll provide you with
            suggestions and guidance, but will not create a solution to the
            problem you are working on. Ask a question below!`}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
