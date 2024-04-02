"use client";

import { Box, useTheme } from "@mui/material";

export default function ChatContainer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: { xs: "95%", md: "50%" },
        height: "50vh",
        margin: "1rem auto",
        overflowY: "auto",
        backgroundColor: "background.paper",
        boxShadow: 1,
        border: `1px solid ${theme.palette.divider}`,
      }}
    ></Box>
  );
}
