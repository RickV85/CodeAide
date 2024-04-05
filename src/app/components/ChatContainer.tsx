"use client";
import { Box, Typography, useTheme, Divider } from "@mui/material";
import { Message } from "ai/react";
import { useEffect } from "react";

interface Props {
  messages: Message[];
  chatError: Error | undefined;
}

export default function ChatContainer({ messages, chatError }: Props) {
  const theme = useTheme();

  useEffect(() => {
    if (chatError) {
      console.error(chatError);
    }
  }, [chatError]);

  const renderActiveChat = () => {
    if (messages.length) {
      const chatDisplay = messages.map((msg, i) => {
        let role;
        switch (msg.role) {
          case "user":
            role = "You";
            break;
          case "assistant":
            role = "CodeAide";
            break;
          default:
            role = "";
        }
        return (
          <Box key={`msg-${i}`} sx={{ marginBottom: "1rem" }}>
            <Typography>
              {role}: {msg.content}
            </Typography>
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
        {chatError ? (
          <Typography marginTop="1rem">
            An error occurred, please reload the page. Error:{" "}
            {chatError.message}
          </Typography>
        ) : (
          <Box marginTop="1rem">
            {messages.length ? (
              renderActiveChat()
            ) : (
              <Typography variant="body1" textAlign="center">
                {`I'm specifically designed to assist you with coding challenges or
            questions like a mentor or teacher would. I'll provide you with
            suggestions and guidance, but will not create a solution to the
            problem you are working on. Ask a question below!`}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
