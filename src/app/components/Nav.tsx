import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AccordionMenu from "./AccordionMenu";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AccordionMenu />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            CodeAide
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
