import {
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { Form, Grid, Page } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import api from '../../services/api';

export function NewUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
    birthDate: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (formData.password !== formData.passwordConfirmation) {
      alert('As senhas não coincidem!');
      setLoading(false);
      return;
    }

    try {
      // Remove o campo passwordConfirmation antes de enviar para a API
      const { passwordConfirmation, ...userData } = formData;

      const response = await api.post('/users', userData);

      if (response.status === 201) {
        alert('Usuário cadastrado com sucesso!');
        navigate('/login');
      }
    } catch (error: any) {
      if (error.response) {
        alert(`Erro ao cadastrar usuário: ${error.response.data.message || 'Tente novamente mais tarde'}`);
      } else if (error.request) {
        alert('Erro de conexão. Verifique sua internet.');
      } else {
        alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
      }
      console.error('Erro ao cadastrar usuário:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Header />
      <Form onSubmit={handleSubmit}>
        <h1>Novo Usuário</h1>
        <h3>Informações Pessoais</h3>
        <Grid>
          <TextField
            label="Nome"
            variant="outlined"
            required
            value={formData.firstName}
            onChange={e => setFormData({...formData, firstName: e.target.value})}
          />
          <TextField
            label="Sobrenome"
            variant="outlined"
            required
            value={formData.lastName}
            onChange={e => setFormData({...formData, lastName: e.target.value})}
          />
        </Grid>
        <Grid>
          <TextField
            label="CPF"
            variant="outlined"
            required
            value={formData.cpf}
            onChange={e => setFormData({...formData, cpf: e.target.value})}
          />
          <TextField
            label="Telefone"
            variant="outlined"
            required
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Data de Nascimento"
            format="DD/MM/YYYY"
            value={formData.birthDate ? dayjs(formData.birthDate) : null}
            onChange={(value) => {
              if (value) {
                setFormData({
                  ...formData,
                  birthDate: dayjs(value).format('YYYY-MM-DD')
                });
              }
            }}
          />
        </LocalizationProvider>
        <h3>Dados de Acesso</h3>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          required
          fullWidth
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
        <Grid>
          <TextField
            type="password"
            label="Senha"
            variant="outlined"
            required
            value={formData.password}
            onChange={e => setFormData({...formData, password: e.target.value})}
          />
          <TextField
            type="password"
            label="Confirmar Senha"
            variant="outlined"
            required
            value={formData.passwordConfirmation}
            onChange={e => setFormData({...formData, passwordConfirmation: e.target.value})}
          />
        </Grid>
        <Button 
          variant="contained" 
          type="submit"
          disabled={loading}
          sx={{
            marginTop: 2,
            padding: '12px'
          }}
        >
          {loading ? 'CADASTRANDO...' : 'CADASTRAR USUÁRIO'}
        </Button>
      </Form>
    </Page>
  );
} 