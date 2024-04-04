"use client";
import { TextField, Box } from "@mui/material";
export default function ChatTextInput() {
  return (
    <Box
      sx={{
        width: { xs: "100vw" },
        padding: "1rem"
      }}
    >
      <TextField
        id="chatTextInput"
        multiline
        rows={6}
        placeholder="Enter question or response here"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
}
