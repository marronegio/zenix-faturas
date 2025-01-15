import {
  Box,
  createTheme,
  IconButton,
  Pagination,
  Tab,
  ThemeProvider,
} from "@mui/material";
import { Container, Items } from "./styles";
import { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { BillsList } from "../../components/BillsList";
import { ClientsList } from "../../components/ClientsList";
import { UsersList } from "../../components/UsersList";

export function Dashboard() {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Header />
      <Container>
        <Link to="/new-bill">
          <div className="addBtn">
            <IconButton color="primary" size="large" onClick={() => {}}>
              <AddCircleOutlineOutlinedIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </div>
        </Link>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Faturas" value="1" />
              <Tab label="Clientes" value="2" />
              <Tab label="Usuários" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BillsList />
          </TabPanel>
          <TabPanel value="2">
            <ClientsList />
          </TabPanel>
          <TabPanel value="3">
            <UsersList />
          </TabPanel>
        </TabContext>
      </Container>
    </>
  );
}
