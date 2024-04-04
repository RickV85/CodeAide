"use client";
import { Box, Divider, Typography, useTheme } from "@mui/material";

export default function Conversations() {
  const theme = useTheme();
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
      <Typography variant="h6" textAlign={"center"}>Conversations</Typography>
      <Divider variant="middle" />
    </Box>
  );
}
