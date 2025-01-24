import {
  Box,
  IconButton,
  Tab,
} from "@mui/material";
import { Container } from "./styles";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { TabContext, TabList } from "@mui/lab";

export function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getTabValue = () => {
    if (location.pathname.includes("/clientes")) return "2";
    if (location.pathname.includes("/usuarios")) return "3";
    return "1";
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    switch (newValue) {
      case "1":
        navigate("/dashboard/faturas");
        break;
      case "2":
        navigate("/dashboard/clientes");
        break;
      case "3":
        navigate("/dashboard/usuarios");
        break;
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Link to="/new-bill">
          <div className="addBtn">
            <IconButton color="primary" size="large">
              <AddCircleOutlineOutlinedIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </div>
        </Link>
        <TabContext value={getTabValue()}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Faturas" value="1" />
              <Tab label="Clientes" value="2" />
              <Tab label="Usuários" value="3" />
            </TabList>
          </Box>
          <Outlet />
        </TabContext>
      </Container>
    </>
  );
}
