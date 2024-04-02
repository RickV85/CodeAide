import { AppBar, Box, Toolbar, Typography, IconButton, MenuList } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CodeAide
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
