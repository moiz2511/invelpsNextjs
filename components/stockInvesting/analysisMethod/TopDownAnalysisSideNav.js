import React from "react";
import SideNav from "../../SideNav";

function TopDownAnalysisSideNav({ activeHeadingId, activeSubheadingId }) {
  const links = [
    {
      id: 1,
      main: "1. TOP DOWN ANALYSIS",
      subs: [
        {
          id: 1.1,
          value: "1. Analysis fundamentals",
          link: "/stock-investing/analysis-method/framework/top-down-analysis/analysis-fundamentals",
        },
        {
          id: 1.2,
          value: "2. Goals and approaches",
          link: "/stock-investing/analysis-method/framework/top-down-analysis/goals-and-approaches",
        },
        {
          id: 1.3,
          value: "3. Pick an area or build your strategy",
          link: "/stock-investing/analysis-method/framework/top-down-analysis/strategy-or-model",
        },
      ],
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

export default TopDownAnalysisSideNav;
