import styles from "./page.module.css";
import Nav from "./components/Nav";
import ChatContainer from "./components/ChatContainer";
import { Grid } from "@mui/material";
import ChatTextInput from "./components/ChatTextInput";
import ChatSubmitButton from "./components/ChatSubmitButton";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Grid container>
        <Grid item>
          <Chat />
        </Grid>
      </Grid>
    </main>
  );
}
