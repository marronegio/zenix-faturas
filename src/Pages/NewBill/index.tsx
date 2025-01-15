import {
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Form, Grid, ItemsGrid, Page } from "./styles";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { NumericFormat } from "react-number-format";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { BillItem } from "../../components/BillItem";
import { deDE } from "@mui/x-date-pickers/locales/deDE";

export function NewBill() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentValue, setPaymentValue] = useState("");
  const [observations, setObservations] = useState("");
  const [items, setItems] = useState<{ description: string; value: string }[]>(
    [{ description: "", value: "" }]
  );

  let currentId: number;
  const navigate = useNavigate();

  axios
    .get("http://localhost:3000/bills")
    .then((response) => {
      console.log(response.data.length);
      currentId = response.data.length;
    })
    .catch(function (error) {
      console.log(error);
    });

  async function handleAddBill() {
    try {
      await axios.post(`http://localhost:3000/bills`, {
        id: currentId + 1,
        title: title,
        description: description,
        date: dayjs().format("DD/MM/YYYY"),
      });
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/dashboard");
    }
  }

  function handleAddNewItem() {
    setItems((prevItems) => [...prevItems, { description: "", value: "" }]);
  }

  return (
    <Page>
      <Header />
      <Form>
        <h1>Adicionar Nova Fatura</h1>
        <h3>Detalhes do serviço</h3>
        <TextField
          className="form-item"
          id="title"
          label="Título"
          variant="outlined"
          onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
          }}
        />
        <TextField
          className="form-item"
          id="description"
          label="Descrição"
          variant="outlined"
          onChange={(e) => {
            const value = e.target.value;
            setDescription(value);
          }}
        />
        <div className="line">
          <h3>Itens</h3>
          <IconButton color="primary" size="large" onClick={handleAddNewItem}>
            <AddCircleOutlineOutlinedIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </div>
        <ItemsGrid id="items-list">
          {items.map((item, index) => (
            <BillItem
              key={index}
              description={item.description}
              value={item.value}
              onChange={(updatedItem: any) => {
                setItems((prevItems) =>
                  prevItems.map((currentItem, i) =>
                    i === index ? updatedItem : currentItem
                  )
                );
              }}
              onDelete={() => {
                setItems((prevItems) => prevItems.filter((_, i) => i !== index));
              }}
            />
          ))}
        </ItemsGrid>
        <h3>Detalhes do pagamento</h3>
        <TextField
          label="Método de Pagamento"
          id="demo-simple-select"
          select
          value={paymentMethod}
          onChange={(e) => {
            const value = e.target.value;
            setPaymentMethod(value);
          }}
        >
          <MenuItem value="PIX">PIX</MenuItem>
          <MenuItem value="Boleto">Boleto Bancário</MenuItem>
        </TextField>
        <Grid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Data de Vencimento"
              format="DD/MM/YYYY"
              onChange={(e) => {
                const value = e;
                if (value) {
                  setPaymentDate(dayjs(value).format("DD/MM/YYYY"));
                }
              }}
            />
          </LocalizationProvider>
          <NumericFormat
            value={paymentValue}
            onChange={(e) => {
              const value = e.target.value;
              setPaymentValue(value);
            }}
            customInput={TextField}
            thousandSeparator="."
            prefix="R$"
            label="Valor Total"
            decimalSeparator=","
            allowLeadingZeros={false}
            decimalScale={2}
            fixedDecimalScale={true}
            allowedDecimalSeparators={[]}
          />
        </Grid>
        <TextField
          label="Observações"
          id="demo-simple-select"
          value={observations}
          multiline
          rows={4}
          onChange={(e) => {
            const value = e.target.value;
            setObservations(value);
          }}
        ></TextField>
        <Button variant="contained" onClick={handleAddBill}>
          ADICIONAR FATURA
        </Button>
      </Form>
    </Page>
  );
}
