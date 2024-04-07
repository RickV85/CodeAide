"use client";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import { Grid } from "@mui/material";
import Chat from "./components/Chat";
import Conversations from "./components/Conversations";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

export default function Home() {
  const { showConvView } = useContext(AppContext);
  return (
    <main className={styles.main}>
      <Nav />
      <Grid container spacing={0}>
        <Grid
          item
          xs={showConvView ? 12 : false}
          lg={4}
          sx={{ display: { xs: showConvView ? "block" : "none", lg: "block" } }}
        >
          <Conversations />
        </Grid>
        <Grid
          item
          xs={showConvView ? false : 12}
          lg={8}
          sx={{ display: { xs: showConvView ? "none" : "block", lg: "block" } }}
        >
          <Chat />
        </Grid>
      </Grid>
    </main>
  );
}
