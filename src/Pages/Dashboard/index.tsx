import { Button, Pagination } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Container, Header, Items } from "./styles";
import { ListItem } from "../../components/ListItem";
import axios from "axios";
import { useEffect, useState } from "react";

export function Dashboard() {
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

  const displayedBills = bills.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <>
      <Header>
        <h1>Zenix Faturas</h1>
        <div className="logout-btn">
          <Button variant="contained" startIcon={<LogoutIcon />}>
            Sair
          </Button>
        </div>
      </Header>
      <Container>
        <Items>
          {displayedBills.map((bill: any) => (
            <ListItem
              key={bill.id}
              number={bill.id}
              name={bill.client}
              title={bill.title}
              date={bill.date}
            />
          ))}
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
        </Items>
      </Container>
    </>
  );
}
