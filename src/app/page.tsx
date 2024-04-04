import styles from "./page.module.css";
import Nav from "./components/Nav";
import { Grid } from "@mui/material";
import Chat from "./components/Chat";
import Conversations from "./components/Conversations";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Grid container spacing={0}>
        <Grid
          item
          xs={false}
          lg={4}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <Conversations />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Chat />
        </Grid>
      </Grid>
    </main>
  );
}
