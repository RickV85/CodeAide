import styles from "./page.module.css";
import Nav from "./components/Nav";
import ChatContainer from "./components/ChatContainer";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <ChatContainer />
        </Grid>
      </Grid>
    </main>
  );
}
