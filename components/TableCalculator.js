import { InputAdornment, TextField, Tooltip } from "@mui/material";
import React from "react";
import styles from "@/styles/TableCalculator.module.css";

function TableCalculator({ heading, fields, handleFieldOnChange }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{heading}</h2>
      <div className={styles.innerContainer}>
        {fields.map((field, i) => (
          <div
            key={i}
            className={`${styles.row} ${
              field.type == "input" ? styles.inputRow : styles.displayRow
            } ${i === fields.length - 1 && styles.final}`}
          >
            <p className={styles.label}>
              <Tooltip title={field.tooltip} placement="right-end">
                <span>{field.label}</span>
              </Tooltip>
            </p>
            <TextField
              name={`${field.id}`}
              type="number"
              fullWidth
              disabled={field.type === "input" ? false : true}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      height: "30px",
                      width: "15px",
                      margin: "0",
                      padding: "10px",
                      backgroundColor:
                        field.type === "input" ? "white" : "lightgray",
                    }}
                  >
                    $
                  </InputAdornment>
                ),
              }}
              id={`${field.id}`}
              value={field.value}
              // className={styles.textField}
              onChange={handleFieldOnChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableCalculator;
