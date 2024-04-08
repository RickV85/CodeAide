"use client";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import Chat from "./components/Chat";
import Conversations from "./components/Conversations";
import { useContext, useEffect } from "react";
import { AppContext } from "./contexts/AppContext";

export default function Home() {
  const { showConvView, setShowConvView } = useContext(AppContext);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  // If resizing window from mobile to desktop sizing, resets to default Chat view
  useEffect(() => {
    if (isDesktop) {
      setShowConvView(false);
    }
  }, [isDesktop]);

  return (
    <main className={styles.main}>
      <Nav />
      <Grid container spacing={0}>
        <Grid
          item
          xs={showConvView ? 12 : false}
          md={4}
          sx={{ display: { xs: showConvView ? "block" : "none", md: "block" } }}
        >
          <Conversations />
        </Grid>
        <Grid
          item
          xs={showConvView ? false : 12}
          md={8}
          sx={{ display: { xs: showConvView ? "none" : "block", md: "block" } }}
        >
          <Chat />
        </Grid>
      </Grid>
    </main>
  );
}
