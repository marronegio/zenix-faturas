import Button from "@mui/material/Button";
import { Banner, Container, Form, Page } from "./styles";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Login() {
  return (
    <Page>
      <Banner />
      <Container>
        <Form>
          <img src={logo} alt="Zenix Faturas" />
          <TextField id="cpf" label="CPF" variant="outlined" />
          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            type="password"
          />
          <Link to={"/dashboard"}>
            <Button variant="contained">Entrar</Button>
          </Link>
        </Form>
      </Container>
    </Page>
  );
}
