"use client";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AccordionMenu from "./AccordionMenu";
import { RefObject } from "react";

interface Props {
  navRef: RefObject<HTMLDivElement>;
}

export default function Nav({ navRef }: Props) {
  const theme = useTheme();
  const isMobileDisplay = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return (
    <Box sx={{ flexGrow: 1 }} ref={navRef}>
      <AppBar position="static">
        <Toolbar>
          {isMobileDisplay && <AccordionMenu />}
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            CodeAide
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
