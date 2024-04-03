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

export default function Nav() {
  const theme = useTheme();
  const isMobileDisplay = useMediaQuery(theme.breakpoints.between("xs", "lg"));

  return (
    <Box sx={{ flexGrow: 1 }}>
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
