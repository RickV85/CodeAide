import ChatContainer from "./ChatContainer";
import ChatTextInput from "./ChatTextInput";
import ChatSubmitButton from "./ChatSubmitButton";
import { Grid } from "@mui/material";

export default function Chat() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Grid item xs={12} sx={{ width: "100%" }}>
        <ChatContainer />
      </Grid>
      <Grid item xs={12} sx={{ width: "100%" }}>
        <ChatTextInput />
      </Grid>
      <Grid item xs={12}>
        <ChatSubmitButton />
      </Grid>
    </Grid>
  );
}
