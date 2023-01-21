import React from "react";
import styles from "@/styles/Button.module.css";
import Button from "@mui/material/Button";

function CustomButton({ children, onClick, disabled, style }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={styles.btn}
      style={style}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
