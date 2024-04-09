"use client";
import Nav from "./components/Nav";
import {
  Grid,
  useTheme,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Chat from "./components/Chat";
import Conversations from "./components/Conversations";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "./contexts/AppContext";

export default function Home() {
  const { showConvView, setShowConvView, useDarkMode, setUseDarkMode } =
    useContext(AppContext);
  const navRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Load dark mode setting from system and LS
  useEffect(() => {
    const systemDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const stickyDarkMode = window.localStorage.getItem("useDarkMode");

    // If user's system in dark mode preference and LS has not been
    // set with useDarkMode, or has set dark mode, then useDarkMode
    if (stickyDarkMode === null && systemDarkMode) {
      setUseDarkMode(true);
    } else if (stickyDarkMode === "true") {
      setUseDarkMode(true);
    }
  }, []);

  // Set LS useDarkMode preference on useDarkMode change
  useEffect(() => {
    if (useDarkMode) {
      window.localStorage.setItem("useDarkMode", "true");
    } else {
      window.localStorage.setItem("useDarkMode", "false");
    }
  }, [useDarkMode]);

  // If resizing window from mobile to desktop sizing, resets to default Chat view
  useEffect(() => {
    if (isDesktop) {
      setShowConvView(false);
    }
  }, [isDesktop]);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={useDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <main>
        <Nav navRef={navRef} />
        <Grid
          container
          spacing={0}
          minHeight={`calc(100vh - ${
            navRef.current ? navRef.current.scrollHeight : "70"
          }px)`}
        >
          <Grid
            item
            xs={showConvView ? 12 : false}
            md={4}
            sx={{
              display: { xs: showConvView ? "block" : "none", md: "block" },
            }}
          >
            <Conversations />
          </Grid>
          <Grid
            item
            xs={showConvView ? false : 12}
            md={8}
            sx={{
              display: { xs: showConvView ? "none" : "block", md: "block" },
            }}
          >
            <Chat />
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}
