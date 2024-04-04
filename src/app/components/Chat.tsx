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
      <Grid item>
        <ChatContainer />
      </Grid>
      <Grid item>
        <ChatTextInput />
      </Grid>
      <Grid item>
        <ChatSubmitButton />
      </Grid>
    </Grid>
  );
}
