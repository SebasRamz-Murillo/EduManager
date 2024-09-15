import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export default function MenuHeader() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLinkMyProfile = () => {
    console.log("Link to my profile");
  };

  const handleLinkSupport = () => {};

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <div>
      <button
        className="h-10 w-10 rounded-full bg-purple-900"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <InsertEmoticonIcon />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLinkMyProfile}>Mi perfil</MenuItem>
        <MenuItem onClick={handleLinkSupport}>Soporte</MenuItem>
        <MenuItem onClick={handleLogout}>Cerrar sesion</MenuItem>
      </Menu>
    </div>
  );
}
