import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "../public/icons/close.png";
import Image from "next/image";
import styles from "@/styles/InfoModal.module.css";
import CustomButton from "./Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  overflowY: "scroll",
  borderRadius: "10px",
};

function InfoModal({ open, setOpen, content, heading }) {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={styles.container}
    >
      <Box sx={style}>
        <div className={styles.header}>
          <h1>{heading}</h1>
          <Image src={CloseIcon} onClick={() => setOpen(false)} />
        </div>
        <div className={styles.content}>{content}</div>
        {/* <div className={styles.footer}>
          <CustomButton onClick={() => setOpen(false)}>Close</CustomButton>
        </div> */}
      </Box>
    </Modal>
  );
}

export default InfoModal;
