import { Container } from "./styles";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
