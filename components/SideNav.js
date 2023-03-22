import React, { useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "@/styles/SideNav.module.css";
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

function SideNav({ activeParent, activeChild, heading, links, style }) {
  const [expandedKey, setExpandedKey] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleChange = (key) => {
    setExpandedKey(key);
  };

  const listenToScroll = () => {
    document.documentElement.scrollTop >= 165
      ? setIsFixed(true)
      : setIsFixed(false);
  };

  useEffect(() => {
    setExpandedKey(activeParent);
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Card className={`${styles.card}`} style={style} elevation={0}>
      <CardContent
        className={isFixed ? styles.cardContainerFixed : styles.cardContainer}
      >
        <h2 className={styles.heading}>{heading}</h2>
        <div>
          {links.map((link, key) => (
            <CustomAccordion
              key={key}
              expanded={link.id === expandedKey}
              onClick={() =>
                handleChange(expandedKey === link.id ? -1 : link.id)
              }
              className={styles.accordion}
            >
              {link.link ? (
                <Link href={link.link}>
                  <CustomAccordionSummary className={styles.accordionMain}>
                    {link.main}
                  </CustomAccordionSummary>
                </Link>
              ) : (
                <CustomAccordionSummary className={styles.accordionMain}>
                  {link.main}
                </CustomAccordionSummary>
              )}
              <AccordionDetails className={styles.accordionDetails}>
                <ul>
                  {link.subs.map((sub, key) => (
                    <li
                      key={sub.id}
                      className={
                        sub.id === activeChild ? styles.bold : undefined
                      }
                    >
                      <Link href={sub.link}>{sub.value}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </CustomAccordion>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default SideNav;
