"use client";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { ConversationRepo } from "../classes/ConversationRepo";
import { Conversation } from "../classes/Conversation";
import ConversationTile from "./ConversationTile";

export default function Conversations() {
  const { setMessages, conversationRepo, setConversationRepo } =
    useContext(AppContext);
  const [convDisplay, setConvDisplay] = useState<
    JSX.Element | JSX.Element[] | undefined
  >();
  const theme = useTheme();

  const makeConvActive = (id: string | null) => {
    if (id && conversationRepo) {
      const foundConv = conversationRepo.findConvById(id);
      if (foundConv) {
        // setActiveChat(foundConv.messages);
        setMessages(foundConv.messages);
      }
    }
  };

  const deleteConv = (id: string) => {
    const history = window.localStorage.getItem("conversations");
    // Delete from conversationRep
    if (history) {
      const parsedHistory = JSON.parse(history);
      if (id && conversationRepo && Object.keys(parsedHistory).includes(id)) {
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
  }, [conversationRepo]);

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
        Chat History
      </Typography>
      <Divider variant="middle" />
      {conversationRepo ? convDisplay : null}
    </Box>
  );
}
