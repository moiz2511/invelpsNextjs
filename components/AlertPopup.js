import { Alert, Snackbar } from "@mui/material";
import React from "react";

function AlertPopup({
  message,
  open,
  duration = 6000,
  handleClose,
  severity,
  position = { vertical: "bottom", horizontal: "right" },
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={position}
    >
      <Alert variant="filled" onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertPopup;
