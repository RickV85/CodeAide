"use client";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Conversations() {
  const { activeChat } = useContext(AppContext);
  const [conversations, setConversations] = useState<any>([]);
  const theme = useTheme();

  const getHistory = () => {
    const history = window.localStorage.getItem("conversations");
    if (history) {
      const parsedHist = JSON.parse(history);
      const convKeys = Object.keys(parsedHist);
      if (convKeys.length) {
        return convKeys;
      }
    }
  };

  useEffect(() => {
    const updatedConversations = getHistory();
    if (updatedConversations?.length) {
      setConversations(updatedConversations);
    }
  }, [activeChat]);

  const renderConversations = () => {
    const convElements = conversations.map((key: any) => {
      return (
        <Box key={`conv-${key}`}>
          <Typography>{key}</Typography>
        </Box>
      );
    });
    return convElements;
  };

  return (
    <Box
      sx={{
        height: "100vh",
        margin: "1rem",
        padding: "0.5rem",
        overflowY: "auto",
        backgroundColor: "background.paper",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "4px",
      }}
    >
      <Typography variant="h6" textAlign={"center"}>
        Conversations
      </Typography>
      <Divider variant="middle" />
      {renderConversations()}
    </Box>
  );
}
