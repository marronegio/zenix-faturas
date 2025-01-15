import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "./styles";

export function BillItem(props: {
  description: string;
  value: string;
  onChange: (updatedItem: { description: string; value: string }) => void;
  onDelete: () => void;
}) {
  const { description, value, onChange, onDelete } = props;

  return (
    <>
      <TextField
        className="form-item"
        id="description"
        label="Descrição"
        variant="outlined"
        value={description}
        onChange={(e) => {
          const updatedDescription = e.target.value;
          onChange({ description: updatedDescription, value });
        }}
      />
      <NumericFormat
        value={value}
        onChange={(e) => {
          const updatedValue = e.target.value;
          onChange({ description, value: updatedValue });
        }}
        customInput={TextField}
        thousandSeparator="."
        prefix="R$"
        label="Valor"
        decimalSeparator=","
        allowLeadingZeros={false}
        decimalScale={2}
        fixedDecimalScale={true}
        allowedDecimalSeparators={[]}
      />
      <Button onClick={onDelete}>
        <DeleteForeverIcon sx={{ fontSize: 20, color: "#0d6aa8" }} />
      </Button>
    </>
  );
}
