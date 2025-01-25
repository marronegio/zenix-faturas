import Button from "@mui/material/Button";
import { Banner, Container, Form, Page, AnimatedBox } from "./styles";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";
import api from '../../services/api';

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/users/login', {
        email: formData.email,
        password: formData.password
      });

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard/faturas');
      } else {
        setError('Resposta inválida do servidor');
      }
    } catch (error: any) {
      if (error.response) {
        // Erro da API
        switch (error.response.status) {
          case 401:
            setError('Email ou senha incorretos');
            break;
          case 404:
            setError('Usuário não encontrado');
            break;
          default:
            setError('Erro ao fazer login. Tente novamente mais tarde.');
        }
      } else if (error.request) {
        setError('Erro de conexão. Verifique sua internet.');
      } else {
        setError('Erro ao fazer login. Tente novamente mais tarde.');
      }
      console.error('Erro no login:', error);
    } finally {
      setLoading(false);
    }
  };

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
          onSubmit={handleSubmit}
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
              id="email" 
              label="Email" 
              variant="outlined"
              type="email"
              fullWidth
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!error}
              disabled={loading}
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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={!!error}
              helperText={error}
              disabled={loading}
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
            <Button 
              type="submit"
              variant="contained"
              disabled={loading}
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
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
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
