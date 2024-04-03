import { TextField, Box } from "@mui/material";
export default function ChatTextInput() {
  return (
    <Box
      sx={{
        width: { xs: "100vw" },
        padding: "1rem",
      }}
    >
      <TextField
        id="chatTextInput"
        label="Your response"
        multiline
        rows={6}
        defaultValue="Enter question here"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
}
