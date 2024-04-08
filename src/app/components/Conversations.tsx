"use client";
import {
  Box,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { ConversationRepo } from "../classes/ConversationRepo";
import { Conversation } from "../classes/Conversation";
import ConversationTile from "./ConversationTile";

export default function Conversations() {
  const {
    setMessages,
    conversationRepo,
    setConversationRepo,
    activeChatId,
    setActiveChatId,
    setShowConvView,
  } = useContext(AppContext);
  const [convDisplay, setConvDisplay] = useState<
    JSX.Element | JSX.Element[] | undefined
  >();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  // Fires when a ConversationTile is clicked to set as the
  // activeChatId / shown conversation in ChatContainer
  const makeConvActive = (id: string | null) => {
    if (id && conversationRepo) {
      const foundConv = conversationRepo.findConvById(id);
      if (foundConv && id !== activeChatId) {
        setMessages(foundConv.messages);
        setActiveChatId(id);
        // If mobile, switch to Chat view on selection of conversation
        if (isDesktop === false) {
          setShowConvView(false);
        }
      }
    }
  };

  // Fires when a ConversationTile's CloseIcon is clicked to
  // delete the conversation from state and LS
  const deleteConv = (id: string) => {
    const history = window.localStorage.getItem("conversations");
    // Delete conversation from conversationRepo
    if (history) {
      const parsedHistory = JSON.parse(history);
      if (id && conversationRepo && Object.keys(parsedHistory).includes(id)) {
        // If deleting the active conversation, deactivate as activeChatId
        // and setMessages to []
        if (id === activeChatId) {
          setActiveChatId("");
          setMessages([]);
        }
        const newRepo = new ConversationRepo(parsedHistory);
        newRepo?.removeConvById(id);
        setConversationRepo(newRepo);

        // Delete from LS
        delete parsedHistory[id];
        window.localStorage.setItem(
          "conversations",
          JSON.stringify(parsedHistory)
        );
      }
    }
  };

  // Render elements chat history in Conversations from conversationRepo
  // and set component's convDisplay state
  useEffect(() => {
    const renderConversations = () => {
      if (conversationRepo?.conversations?.length) {
        const convElements = conversationRepo?.conversations.map(
          (conv: Conversation) => {
            return (
              <ConversationTile
                key={`conv-${conv.id}`}
                conversation={conv}
                makeConvActive={makeConvActive}
                deleteConv={deleteConv}
              />
            );
          }
        );
        return convElements;
      } else {
        return (
          <Box>
            <Typography marginTop="0.5rem" textAlign="center">
              No conversations to display
            </Typography>
          </Box>
        );
      }
    };
    setConvDisplay(renderConversations());
  }, [conversationRepo, activeChatId]);

  return (
    <Box
      sx={{
        height: "100%",
        margin: "1rem",
        padding: "0.5rem",
        overflowY: "scroll",
        backgroundColor: "background.paper",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "4px",
      }}
    >
      <Typography variant="h6" textAlign={"center"}>
        History
      </Typography>
      <Divider variant="middle" />
      {conversationRepo ? convDisplay : null}
    </Box>
  );
}
