import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material";
import { Conversation } from "../classes/Conversation";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

interface Props {
  conversation: Conversation;
}

export default function ConversationTile({ conversation }: Props) {
  const { setActiveChat, setMessages, conversationRepo } =
    useContext(AppContext);
  const theme = useTheme();

  const makeConvActive = (id: string | null) => {
    if (id && conversationRepo) {
      const foundConv = conversationRepo.findConvById(id);
      if (foundConv) {
        setActiveChat(foundConv.messages);
        setMessages(foundConv.messages);
      }
    }
  };

  const deleteConversation = (id: string) => {
    if (id && conversationRepo) {
      conversationRepo.removeConvById(id);

      // Add var with CovRepo method to turn back to JSON
    }
  };

  return (
    <Box
      marginTop="1rem"
      sx={{
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: "4px",
        padding: "0.25rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        onClick={() => makeConvActive(conversation.id!)}
        title="Make active conversation"
        width="100%"
        sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <Typography>{conversation.createIntro()}</Typography>
      </Box>
      <Box sx={{ marginLeft: "0.5rem" }}>
        <Box
          title="Delete conversation"
          onClick={() => deleteConversation(conversation.id!)}
          sx={{ cursor: "pointer" }}
        >
          <CloseIcon />
        </Box>
      </Box>
    </Box>
  );
}