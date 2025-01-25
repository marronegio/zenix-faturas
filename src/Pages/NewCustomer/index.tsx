import { useState } from 'react';
import { Container, Form } from './styles';
import { useNavigate } from 'react-router-dom';

export function NewCustomer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    document: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.zenixapp.com.br/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Cliente cadastrado com sucesso!');
        navigate('/dashboard/clientes');
      }
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
    }
  };

  const handleAddressChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value
      }
    }));
  };

  return (
    <Container>
      <h1>Novo Cliente</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          required
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
        <input
          type="tel"
          placeholder="Telefone"
          required
          value={formData.phone}
          onChange={e => setFormData({...formData, phone: e.target.value})}
        />
        <input
          type="text"
          placeholder="CPF/CNPJ"
          required
          value={formData.document}
          onChange={e => setFormData({...formData, document: e.target.value})}
        />
        
        <h2>Endereço</h2>
        <input
          type="text"
          placeholder="Rua"
          required
          value={formData.address.street}
          onChange={e => handleAddressChange('street', e.target.value)}
        />
        <input
          type="text"
          placeholder="Número"
          required
          value={formData.address.number}
          onChange={e => handleAddressChange('number', e.target.value)}
        />
        <input
          type="text"
          placeholder="Complemento"
          value={formData.address.complement}
          onChange={e => handleAddressChange('complement', e.target.value)}
        />
        <input
          type="text"
          placeholder="Bairro"
          required
          value={formData.address.neighborhood}
          onChange={e => handleAddressChange('neighborhood', e.target.value)}
        />
        <input
          type="text"
          placeholder="Cidade"
          required
          value={formData.address.city}
          onChange={e => handleAddressChange('city', e.target.value)}
        />
        <input
          type="text"
          placeholder="Estado"
          required
          value={formData.address.state}
          onChange={e => handleAddressChange('state', e.target.value)}
        />
        <input
          type="text"
          placeholder="CEP"
          required
          value={formData.address.zipCode}
          onChange={e => handleAddressChange('zipCode', e.target.value)}
        />
        <button type="submit">Cadastrar Cliente</button>
      </Form>
    </Container>
  );
} 