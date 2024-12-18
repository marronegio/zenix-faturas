import { Button, Pagination } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Container, Header, Items } from "./styles";

export function Dashboard() {
  return (
    <>
      <Header>
        <h1>Zenix Faturas</h1>
        <div className="logout-btn">
          <Button variant="contained" startIcon={<LogoutIcon />}>
            Sair
          </Button>
        </div>
      </Header>
      <Container>
        <Items>
          <Pagination count={10} color="primary" />
        </Items>
      </Container>
    </>
  );
}
