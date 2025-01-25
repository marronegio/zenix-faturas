import { useState } from 'react';
import { Container, Form } from './styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function NewUser() {
  const navigate = useNavigate();
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
    
    if (formData.password !== formData.passwordConfirmation) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      // Remove o campo passwordConfirmation antes de enviar para a API
      const { passwordConfirmation, ...userData } = formData;

      const response = await axios.post('https://api.zenixapp.com.br/users', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        alert('Usuário cadastrado com sucesso!');
        navigate('/login');
      }
    } catch (error: any) {
      if (error.response) {
        // Erro da API com resposta
        alert(`Erro ao cadastrar usuário: ${error.response.data.message || 'Tente novamente mais tarde'}`);
      } else if (error.request) {
        // Erro de conexão
        alert('Erro de conexão. Verifique sua internet.');
      } else {
        // Outros erros
        alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
      }
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <Container>
      <h1>Novo Usuário</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          required
          value={formData.firstName}
          onChange={e => setFormData({...formData, firstName: e.target.value})}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          required
          value={formData.lastName}
          onChange={e => setFormData({...formData, lastName: e.target.value})}
        />
        <input
          type="text"
          placeholder="CPF"
          required
          value={formData.cpf}
          onChange={e => setFormData({...formData, cpf: e.target.value})}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={formData.password}
          onChange={e => setFormData({...formData, password: e.target.value})}
        />
        <input
          type="password"
          placeholder="Confirmar Senha"
          required
          value={formData.passwordConfirmation}
          onChange={e => setFormData({...formData, passwordConfirmation: e.target.value})}
        />
        <input
          type="tel"
          placeholder="Telefone"
          required
          value={formData.phone}
          onChange={e => setFormData({...formData, phone: e.target.value})}
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          required
          value={formData.birthDate}
          onChange={e => setFormData({...formData, birthDate: e.target.value})}
        />
        <button type="submit">Cadastrar Usuário</button>
      </Form>
    </Container>
  );
} 