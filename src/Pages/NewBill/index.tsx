import {
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Form, Grid, ItemsGrid, Page } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { NumericFormat } from "react-number-format";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { BillItem } from "../../components/BillItem";
import api from '../../services/api';

export function NewBill() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    paymentMethod: "",
    dueDate: "",
    totalAmount: "",
    observations: "",
    items: [{ description: "", value: "" }]
  });

  // Atualiza o valor total automaticamente quando os itens mudam
  useEffect(() => {
    const total = formData.items.reduce((sum, item) => {
      const value = item.value
        ? parseFloat(item.value.replace('R$', '').replace('.', '').replace(',', '.'))
        : 0;
      return sum + value;
    }, 0);
    
    setFormData(prev => ({
      ...prev,
      totalAmount: total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }));
  }, [formData.items]);

  function handleAddNewItem() {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { description: "", value: "" }]
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Formata os valores dos itens para números
      const formattedItems = formData.items.map(item => ({
        description: item.description,
        value: parseFloat(item.value.replace('R$', '').replace('.', '').replace(',', '.'))
      }));

      const invoiceData = {
        title: formData.title,
        description: formData.description,
        paymentMethod: formData.paymentMethod,
        dueDate: formData.dueDate,
        totalAmount: parseFloat(formData.totalAmount.replace('.', '').replace(',', '.')),
        observations: formData.observations,
        items: formattedItems,
        status: 'pending'
      };

      const response = await api.post('/invoices', invoiceData);

      if (response.status === 201) {
        alert('Fatura criada com sucesso!');
        navigate('/dashboard/faturas');
      }
    } catch (error: any) {
      if (error.response) {
        alert(`Erro ao criar fatura: ${error.response.data.message || 'Tente novamente mais tarde'}`);
      } else if (error.request) {
        alert('Erro de conexão. Verifique sua internet.');
      } else {
        alert('Erro ao criar fatura. Tente novamente mais tarde.');
      }
      console.error('Erro ao criar fatura:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Header />
      <Form onSubmit={handleSubmit}>
        <h1>Adicionar Nova Fatura</h1>
        <h3>Detalhes do serviço</h3>
        <TextField
          className="form-item"
          label="Título"
          variant="outlined"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <TextField
          className="form-item"
          label="Descrição"
          variant="outlined"
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <div className="line">
          <h3>Itens</h3>
          <IconButton color="primary" size="large" onClick={handleAddNewItem}>
            <AddCircleOutlineOutlinedIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </div>
        <ItemsGrid>
          {formData.items.map((item, index) => (
            <BillItem
              key={index}
              description={item.description}
              value={item.value}
              onChange={(updatedItem) => {
                const newItems = [...formData.items];
                newItems[index] = updatedItem;
                setFormData({ ...formData, items: newItems });
              }}
              onDelete={() => {
                if (formData.items.length > 1) {
                  setFormData({
                    ...formData,
                    items: formData.items.filter((_, i) => i !== index)
                  });
                }
              }}
            />
          ))}
        </ItemsGrid>
        <h3>Detalhes do pagamento</h3>
        <TextField
          label="Método de Pagamento"
          select
          required
          value={formData.paymentMethod}
          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
        >
          <MenuItem value="PIX">PIX</MenuItem>
          <MenuItem value="BOLETO">Boleto Bancário</MenuItem>
        </TextField>
        <Grid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Data de Vencimento"
              format="DD/MM/YYYY"
              onChange={(value) => {
                if (value) {
                  setFormData({
                    ...formData,
                    dueDate: dayjs(value).format('YYYY-MM-DD')
                  });
                }
              }}
            />
          </LocalizationProvider>
          <NumericFormat
            value={formData.totalAmount}
            customInput={TextField}
            thousandSeparator="."
            prefix="R$"
            label="Valor Total"
            decimalSeparator=","
            disabled
            allowLeadingZeros={false}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </Grid>
        <TextField
          label="Observações"
          multiline
          rows={4}
          value={formData.observations}
          onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
        />
        <Button 
          variant="contained" 
          type="submit"
          disabled={loading}
        >
          {loading ? 'CRIANDO FATURA...' : 'CRIAR FATURA'}
        </Button>
      </Form>
    </Page>
  );
}
