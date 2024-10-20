// UserMenu.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Menu, MenuItem } from "@mui/material";

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null); // Menü durumu

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Menü aç
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Menü kapat
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="user menu"
        onClick={handleMenuOpen} // Menü açma
        color="inherit"
        className="rounded-full border border-solid border-indigo-200 text-white cursor-pointer font-semibold shadow-xs transition-all duration-500 hover:bg-indigo-600 flex gap-2 items-center"
      >
        <div className="flex items-center">
          <MenuIcon className="text-white" />
          <AccountCircleIcon className="text-white" />
        </div>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl} // Menü konumu
        anchorOrigin={{
          vertical: 'bottom', // Menü öğesi altında açılacak
          horizontal: 'left', // Sol tarafında açılacak
        }}
        transformOrigin={{
          vertical: 'top', // Menü öğesi üstünden dönüş olacak
          horizontal: 'left', // Sol tarafında dönüş
        }}
        open={Boolean(anchorEl)} // Menü durumu
        onClose={handleMenuClose} // Kapatma
        PaperProps={{
          sx: {
            mt: 2, // Yukarıda biraz boşluk
          },
        }}
      >
        <MenuItem onClick={handleMenuClose} component={Link} to="/login">Oturum açın</MenuItem>
        <MenuItem onClick={handleMenuClose} component={Link} to="/register">Kaydolun</MenuItem>
        <MenuItem onClick={handleMenuClose} component={Link} to="/airbnb-your-home">Evinizi Airbnb'ye taşıyın</MenuItem>
        <MenuItem onClick={handleMenuClose} component={Link} to="/host-experience">Bir deneyime ev sahipliği yapın</MenuItem>
        <MenuItem onClick={handleMenuClose} component={Link} to="/help">Yardım Merkezi</MenuItem>
      </Menu>
    </div>
  );
}

export default UserMenu;
