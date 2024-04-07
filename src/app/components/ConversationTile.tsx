import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material";
import { Conversation } from "../classes/Conversation";

interface Props {
  conversation: Conversation;
  makeConvActive: (id: string | null) => void;
  deleteConv: (id: string) => void;
}

export default function ConversationTile({
  conversation,
  makeConvActive,
  deleteConv,
}: Props) {
  const theme = useTheme();

  return (
    <Box
      marginTop="1rem"
      sx={{
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: "4px",
        padding: "0.25rem",
        display: "flex",
        justifyContent: "space-between",
        "&:hover svg": {
          opacity: 1,
          transition: "opacity 0.25s ease-in-out",
        },
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
          onClick={() => deleteConv(conversation.id!)}
          sx={{
            cursor: "pointer",
            "& svg": {
              opacity: 0,
              transition: "opacity 0.25s ease-in-out",
            },
          }}
        >
          <CloseIcon />
        </Box>
      </Box>
    </Box>
  );
}
