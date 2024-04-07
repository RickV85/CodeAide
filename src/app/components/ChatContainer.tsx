"use client";
import { Box, Typography, useTheme, Divider } from "@mui/material";
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

export default function ChatContainer() {
  const { messages, error } = useContext(AppContext);
  const theme = useTheme();

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

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
            <Typography fontWeight="700">{role}</Typography>
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
          {messages.length ? "CodeAide" : "Welcome to CodeAide!"}
        </Typography>
        <Divider variant="middle" />
        {error ? (
          <Typography marginTop="1rem">
            An error occurred, please reload the page. Error: {error.message}
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
