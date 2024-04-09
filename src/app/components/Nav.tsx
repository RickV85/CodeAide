"use client";
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AccordionMenu from "./AccordionMenu";
import { RefObject, useContext } from "react";
import Image from "next/image";
import DarkModeSwitch from "./DarkModeSwitch";
import { AppContext } from "../contexts/AppContext";

interface Props {
  navRef: RefObject<HTMLDivElement>;
}

export default function Nav({ navRef }: Props) {
  const { useDarkMode, setUseDarkMode } = useContext(AppContext);
  const theme = useTheme();
  const isMobileDisplay = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return (
    <Box sx={{ flexGrow: 1 }} ref={navRef}>
      <AppBar position="static">
        <Toolbar>
          {isMobileDisplay && <AccordionMenu />}
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent={"flex-start"}
          >
            <Grid item>
              <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
                CodeAide
              </Typography>
            </Grid>
            <Grid item>
              <Image
                src={"/code_icon.png"}
                alt="code icon"
                width={30}
                height={30}
              />
            </Grid>
          </Grid>
          <DarkModeSwitch />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
