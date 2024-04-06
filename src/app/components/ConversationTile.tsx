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
  return (
    <Box
      marginTop="1rem"
      onClick={() => makeConvActive(conversation.id)}
      title="Make active conversation"
      sx={{
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: "4px",
        padding: "0.25rem",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography>{conversation.createIntro()}</Typography>
      <Box title="Delete conversation" sx={{ marginLeft: "0.5rem" }}>
        <CloseIcon />
      </Box>
    </Box>
  );
}
