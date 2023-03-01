import React from "react";
import styles from "@/styles/PageHeader.module.css";
import Button from "@/components/Button";
import Image from "next/image";

const bg =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80";

function PageHeader({
  setOpenModal,
  parentHeading,
  childHeading,
  showMoreInfo,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.bgContainer}>
        <Image src={bg} alt="bg" fill />
      </div>
      <div></div>
      <div className={styles.innerContainer}>
        <h2 className={styles.parentHeading}>{parentHeading}</h2>
        <h1 className={styles.childHeading}>{childHeading}</h1>
        {showMoreInfo && (
          <Button
            style={{ borderRadius: "50px" }}
            onClick={() => setOpenModal(true)}
          >
            <span>Learn now</span>
          </Button>
        )}
      </div>
    </div>
  );
}

export default PageHeader;
