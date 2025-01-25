import { Sidebar, Logo, NavLinks, LogoutButton } from "./styles";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <Sidebar>
      <Logo>
        <img src={logo} alt="Zenix Faturas" />
      </Logo>
      
      <NavLinks>
        <Link to="/dashboard/faturas" className={isActive('faturas') ? 'active' : ''}>
          <ReceiptIcon />
          <span>Faturas</span>
        </Link>
        <Link to="/dashboard/clientes" className={isActive('clientes') ? 'active' : ''}>
          <PeopleIcon />
          <span>Clientes</span>
        </Link>
        <Link to="/dashboard/usuarios" className={isActive('usuarios') ? 'active' : ''}>
          <PersonIcon />
          <span>Usuários</span>
        </Link>
      </NavLinks>

      <LogoutButton>
        <LogoutIcon />
        <span>Sair</span>
      </LogoutButton>
    </Sidebar>
  );
}
