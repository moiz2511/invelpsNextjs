import React, { useState } from "react";
import ListIcon from "../public/icons/list-icon.png";
import styles from "@/styles/TableOfContents.module.css";
import Image from "next/image";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  "&.MuiExpansionPanel-root:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  ".MuiAccordionSummary-content": {
    margin: 0,
    // padding: " 0 0 10px 0",
  },
  ".MuiAccordionSummary-content.Mui-expanded": {
    margin: 0,
  },
}));

function TableOfContent({ links }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={styles.container}>
      <CustomAccordion expanded={expanded} className={styles.accordion}>
        <CustomAccordionSummary className={styles.accordionMain}>
          <div
            className={styles.headingContainer}
            onClick={() => setExpanded(!expanded)}
          >
            <Image src={ListIcon} alt="list" className={styles.img} />
            <p className={styles.heading}>Table Of Contents</p>
          </div>
        </CustomAccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <ul>
            {links.map((sub, key) => (
              <li key={key}>
                <Link href={sub.link}>{sub.value}</Link>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </CustomAccordion>
    </div>
  );
}

export default TableOfContent;
