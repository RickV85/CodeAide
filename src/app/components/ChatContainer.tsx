"use client";
import { useContext } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { AppContext } from "../contexts/AppContext";

export default function ChatContainer() {
  const { activeChat, setActiveChat } = useContext(AppContext);
  const theme = useTheme();

  const renderActiveChat = () => {
    if (activeChat?.messages.length) {
      const chatDisplay = activeChat.messages.map((msg, i) => {
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
      {activeChat?.messages.length ? (
        renderActiveChat()
      ) : (
        <article style={{ textAlign: "center" }}>
          <Typography variant="h6" component={"h2"}>
            Welcome to CodeAide!
          </Typography>
          <Typography variant="body1">
            I&apos;m specifically designed to assist you with coding challenges
            or questions like a mentor or teacher would. I&apos;ll provide you
            with suggestions and guidance, but will not create a solution to the
            problem you are working on. Ask a question below!
          </Typography>
        </article>
      )}
    </Box>
  );
}
