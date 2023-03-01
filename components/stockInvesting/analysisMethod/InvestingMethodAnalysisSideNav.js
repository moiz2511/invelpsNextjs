import React from "react";
import SideNav from "../../SideNav";

function InvestingMethodAnalysisSideNav({
  activeHeadingId,
  activeSubheadingId,
}) {
  const links = [
    {
      id: 1,
      main: "1. ANALYSIS METHOD",
      subs: [
        {
          id: 1.1,
          value: "1. Top Up vs Bottom Up",
          link: "/stock-investing/analysis-method/top-vs-bottom",
        },
      ],
    },
    {
      id: 2,
      main: "2. CHOOSE YOUR APPROACH",
      link: "/stock-investing/analysis-method/choose-your-approach",
      subs: [],
    },
  ];
  return (
    <SideNav
      heading={"Stock Active Investing"}
      links={links}
      activeParent={activeHeadingId}
      activeChild={activeSubheadingId}
    />
  );
}

export default InvestingMethodAnalysisSideNav;
