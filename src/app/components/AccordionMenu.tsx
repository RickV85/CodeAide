"use client";
import { useContext, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../contexts/AppContext";

export default function AccordionMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { showConvView, setShowConvView } = useContext(AppContext);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            if (showConvView === true) {
              setShowConvView(false);
            }
            handleClose();
          }}
        >
          CodeAide
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (showConvView === false) {
              setShowConvView(true);
            }
            handleClose();
          }}
        >
          History
        </MenuItem>
      </Menu>
    </div>
  );
}
