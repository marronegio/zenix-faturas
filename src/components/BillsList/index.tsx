import { Pagination } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Items } from "./styles";
import { ListItem } from "../ListItem";
import { Link } from "react-router-dom";
import { AddButton } from "../shared/styles";
import AddIcon from '@mui/icons-material/Add';

export function BillsList() {
      const [bills, setBills] = useState([]);
      const [page, setPage] = useState(1);
      const itemsPerPage = 5;

      useEffect(() => {
        axios
          .get("http://localhost:3000/bills")
          .then((response) => {
            setBills(response.data);
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);
    
      async function handleDeleteItem(id: number) {
        console.log(id);
        try {
          await axios.delete(`http://localhost:3000/bills/${id}`);
          setBills(bills.filter((bill: any) => bill.id !== id));
        } catch (error) {
          console.log(error);
        }
      }
    
      const displayedBills = bills.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
      );
    
    return(
        <Items>
          {displayedBills.length > 0 ? (
            displayedBills.map((bill: any) => (
              <ListItem
                key={bill.id}
                number={bill.id}
                name={bill.client}
                title={bill.title}
                date={bill.date}
                deleteFunction={() => handleDeleteItem(bill.id)}
              />
            ))
          ) : (
            <p>Você ainda não inseriu nenhuma fatura.</p>
          )}
          <div className="pagination">
            <Pagination
              count={Math.ceil(bills.length / itemsPerPage)}
              color="primary"
              page={page}
              onChange={(event, value) => setPage(value)}
              showFirstButton
              showLastButton
            />
          </div>

          <AddButton>
            <Link to="/dashboard/nova-fatura">
              <AddIcon />
              <span>Adicionar Fatura</span>
            </Link>
          </AddButton>
        </Items>
    )
}