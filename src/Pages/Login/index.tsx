import Button from "@mui/material/Button";
import { Banner, Container, Form, Page } from "./styles";
import TextField from "@mui/material/TextField";

export function Login() {
  return (
    <Page>
      <Banner />
      <Container>
        <Form>
        <h1>Zenix Faturas</h1>
          <TextField id="email" label="E-mail" variant="outlined" />
          <TextField id="password" label="Senha" variant="outlined" type="password" />
          <Button variant="contained">Entrar</Button>
        </Form>
      </Container>
    </Page>
  );
}
