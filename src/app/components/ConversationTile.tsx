import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, useMediaQuery } from "@mui/material";
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
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const topBoxStyles = {
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "4px",
    padding: "0.25rem",
    display: "flex",
    justifyContent: "space-between",
    ...(isDesktop && {
      "&:hover svg": {
        opacity: 1,
        transition: "opacity 0.25s ease-in-out",
      },
    }),
  };

  const closeBoxStyles = {
    cursor: "pointer",
    ...(isDesktop && {
      "& svg": {
        opacity: 0,
        transition: "opacity 0.25s ease-in-out",
      },
    }),
  };

  return (
    <Box marginTop="1rem" sx={topBoxStyles}>
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
          sx={closeBoxStyles}
        >
          <CloseIcon />
        </Box>
      </Box>
    </Box>
  );
}
