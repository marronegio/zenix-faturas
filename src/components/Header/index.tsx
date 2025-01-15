import { Button, Menu, MenuItem } from "@mui/material";
import { HeaderItem } from "./styles";
import { useState } from "react";
import logo from "../../assets/logo.png";

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HeaderItem>
      <img src={logo} alt="Zenix Faturas" />
      <div className="logout-btn">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="contained"
        >
          Menu
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Faturas</MenuItem>
          <MenuItem onClick={handleClose}>Clientes</MenuItem>
          <MenuItem onClick={handleClose}>Usuários</MenuItem>
          <MenuItem onClick={handleClose}>Sair</MenuItem>
        </Menu>
      </div>
    </HeaderItem>
  );
}
