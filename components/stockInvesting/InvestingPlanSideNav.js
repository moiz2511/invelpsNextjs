import React from "react";
import SideNav from "../SideNav";

function InvestingPlanSideNav({ activeHeadingId, activeSubheadingId }) {
  const links = [
    {
      id: 1,
      main: "1. APPROACHES TO STOCK INVESTING",
      subs: [
        {
          id: 1.1,
          value: "1. Portfolio management",
          link: "/stock-investing/approaches/portfolio-managment",
        },
        {
          id: 1.2,
          value: "2. Active vs passive investing",
          link: "/stock-investing/approaches/active-vs-passive-investing",
        },
      ],
    },
    {
      id: 2,
      main: "2. CHOOSE YOUR APPROACH",
      link: "/stock-investing/approaches/choose-your-approach",
      subs: [],
    },
  ];
  return (
    <SideNav
      heading={"Stock Investing"}
      links={links}
      activeParent={activeHeadingId}
      activeChild={activeSubheadingId}
    />
  );
}

export default InvestingPlanSideNav;
