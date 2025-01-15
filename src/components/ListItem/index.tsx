import { IconButton } from "@mui/material";
import { Container } from "./styles";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

export function ListItem(props: any) {
  return (
    <Container>
      <p className="number">{props.number}</p>
      <p>{props.name}</p>
      <p>
        <strong>{props.title}</strong>
      </p>
      <p className="data">{props.date}</p>
      <div className="buttons">
        <IconButton>
          <PictureAsPdfOutlinedIcon />
        </IconButton>
        <IconButton>
          <EditOutlinedIcon />
        </IconButton>
        <IconButton onClick={props.deleteFunction}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </div>
    </Container>
  );
}
