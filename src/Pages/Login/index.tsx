import Button from "@mui/material/Button";
import { Banner, Container, Form, Page, AnimatedBox } from "./styles";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

export function Login() {
  return (
    <Page>
      <Banner>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="banner-content"
        >
          <h1>Bem-vindo de volta!</h1>
          <p>Gerencie suas faturas de forma simples e eficiente</p>
        </motion.div>
        <AnimatedBox 
          animate={{ 
            rotate: [0, 10, 0], 
            y: [0, -20, 0] 
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </Banner>
      <Container>
        <Form
          as={motion.form}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            src={logo} 
            alt="Zenix Faturas"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <TextField 
              id="cpf" 
              label="CPF" 
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "var(--primary)",
                  },
                },
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "var(--primary)",
                  },
                },
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="form-footer"
          >
            <Link to="/dashboard">
              <Button 
                variant="contained"
                sx={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "var(--primary)",
                  "&:hover": {
                    backgroundColor: "#1a6aa8",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 15px rgba(37, 134, 212, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Entrar
              </Button>
            </Link>
            <div className="links">
              <a href="#">Esqueceu a senha?</a>
              <a href="#">Criar conta</a>
            </div>
          </motion.div>
        </Form>
      </Container>
    </Page>
  );
}
