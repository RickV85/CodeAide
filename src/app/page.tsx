import styles from "./page.module.css";
import Nav from "./components/Nav";
import ChatContainer from "./components/ChatContainer";
import { Grid } from "@mui/material";
import ChatTextInput from "./components/ChatTextInput";
import ChatSubmitButton from "./components/ChatSubmitButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
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
    </main>
  );
}
