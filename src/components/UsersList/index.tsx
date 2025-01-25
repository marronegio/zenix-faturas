import { Pagination } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Items } from "./styles";
import { ListItem } from "../ListItem";
import { Link } from "react-router-dom";
import { AddButton } from "../shared/styles";
import AddIcon from '@mui/icons-material/Add';

export function UsersList() {
      const [users, setUsers] = useState([]);
      const [page, setPage] = useState(1);
      const itemsPerPage = 5;

      useEffect(() => {
        axios
          .get("http://localhost:3000/users")
          .then((response) => {
            setUsers(response.data);
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);
    
      async function handleDeleteItem(id: number) {
        console.log(id);
        try {
          await axios.delete(`http://localhost:3000/users/${id}`);
          setUsers(users.filter((user: any) => user.id !== id));
        } catch (error) {
          console.log(error);
        }
      }
    
      const displayedBills = users.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
      );
    
    return(
        <Items>
          {displayedBills.length > 0 ? (
            displayedBills.map((user: any) => (
              <ListItem
                key={user.id}
                number={user.id}
                name={user.client}
                title={user.title}
                date={user.date}
                deleteFunction={() => handleDeleteItem(user.id)}
              />
            ))
          ) : (
            <p>Você ainda não inseriu nenhum usuário.</p>
          )}
          <div className="pagination">
            <Pagination
              count={Math.ceil(users.length / itemsPerPage)}
              color="primary"
              page={page}
              onChange={(event, value) => setPage(value)}
              showFirstButton
              showLastButton
            />
          </div>

          <AddButton>
            <Link to="/dashboard/novo-usuario">
              <AddIcon />
              <span>Adicionar Usuário</span>
            </Link>
          </AddButton>
        </Items>
    )
}