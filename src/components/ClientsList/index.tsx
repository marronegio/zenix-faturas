import { Pagination } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Items } from "./styles";
import { ListItem } from "../ListItem";

export function ClientsList() {
      const [clients, setClients] = useState([]);
      const [page, setPage] = useState(1);
      const itemsPerPage = 5;

      useEffect(() => {
        axios
          .get("http://localhost:3000/clients")
          .then((response) => {
            setClients(response.data);
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);
    
      async function handleDeleteItem(id: number) {
        console.log(id);
        try {
          await axios.delete(`http://localhost:3000/clients/${id}`);
          setClients(clients.filter((client: any) => client.id !== id));
        } catch (error) {
          console.log(error);
        }
      }
    
      const displayedClients = clients.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
      );
    
    return(
        <Items>
          {displayedClients.length > 0 ? (
            displayedClients.map((client: any) => (
              <ListItem
                key={client.id}
                number={client.id}
                name={client.client}
                title={client.title}
                date={client.date}
                deleteFunction={() => handleDeleteItem(client.id)}
              />
            ))
          ) : (
            <p>Você ainda não inseriu nenhum cliente.</p>
          )}
          <div className="pagination">
            <Pagination
              count={Math.ceil(clients.length / itemsPerPage)}
              color="primary"
              page={page}
              onChange={(event, value) => setPage(value)}
              showFirstButton
              showLastButton
            />
          </div>
        </Items>
    )
}