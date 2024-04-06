"use client";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { ConversationRepo } from "../classes/ConversationRepo";
import { Conversation } from "../classes/Conversation";
import ConversationTile from "./ConversationTile";

export default function Conversations() {
  const { activeChat, setActiveChat, setMessages } = useContext(AppContext);
  const [conversationRepo, setConversationRepo] = useState<ConversationRepo>();
  const theme = useTheme();

  const getHistory = () => {
    const history = window.localStorage.getItem("conversations");
    if (history) {
      const parsedHist = JSON.parse(history);
      const conversationRepo = new ConversationRepo(parsedHist);
      return conversationRepo;
    }
  };

  useEffect(() => {
    const updatedConversations = getHistory();
    if (updatedConversations) {
      setConversationRepo(updatedConversations);
    }
  }, [activeChat]);

  const renderConversations = () => {
    if (conversationRepo?.conversations.length) {
      const convElements = conversationRepo?.conversations.map(
        (conv: Conversation) => {
          return (
            <ConversationTile key={`conv-${conv.id}`} conversation={conv} />
            // <Box
            //   key={`conv-${conv.id}`}
            //   marginTop="1rem"
            //   onClick={() => makeConvActive(conv.id)}
            //   title="Make active conversation"
            //   sx={{
            //     border: `1px solid ${theme.palette.primary.light}`,
            //     borderRadius: "4px",
            //     padding: "0.25rem",
            //     cursor: "pointer",
            //     display: "flex",
            //     justifyContent: "space-between",
            //   }}
            // >
            //   <Typography>{conv.createIntro()}</Typography>
            //   <Box
            //     title="Delete conversation"
            //     sx={{ marginLeft: "0.5rem" }}
            //   >
            //     <CloseIcon />
            //   </Box>
            // </Box>
          );
        }
      );
      return convElements;
    } else {
      return (
        <Box>
          <Typography>No conversations to display</Typography>
        </Box>
      );
    }
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
      {conversationRepo ? renderConversations() : null}
    </Box>
  );
}
