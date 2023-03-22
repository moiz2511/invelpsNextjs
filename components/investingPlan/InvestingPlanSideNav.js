import React from "react";
import SideNav from "../SideNav";

function InvestingPlanSideNav({
  activeHeadingId,
  activeSubheadingId,
  sidebarStyle,
}) {
  const links = [
    {
      id: 0,
      main: "Introduction",
      link: "/investing-plan/introduction",
      subs: [],
    },
    {
      id: 1,
      main: "1. Set your financial goals",
      subs: [
        {
          id: 1.1,
          value: "1. Set your financial goals",
          link: "/investing-plan/financial-goals/set-financial-goals",
        },
        {
          id: 1.2,
          value: "2. Prepare your balance sheet",
          link: "/investing-plan/financial-goals/prepare-balance-sheet",
        },
        {
          id: 1.3,
          value: "3. Prepare your income and cashflow statement",
          link: "/investing-plan/financial-goals/prepare-cashflow-statement",
        },
      ],
    },
    {
      id: 2,
      main: "2. Define your needs",
      link: "/investing-plan/financial-goals/time-value-of-money",
      subs: [],
    },
    {
      id: 3,
      main: "3. Understand Risk And Return",
      subs: [
        {
          id: 3.1,
          value: "1. Learn investment vehicles",
          link: "/investing-plan/financial-goals/investment-vehicle",
        },
        {
          id: 3.2,
          value: "2. Define your risk tolerance",
          link: "/investing-plan/financial-goals/risk-tolerance",
        },
      ],
    },
    {
      id: 4,
      main: "4. Choose investment vehicles",
      link: "/investing-plan/investment-vehicles",
      subs: [],
    },
  ];
  return (
    <SideNav
      heading={"Investing plan"}
      links={links}
      activeParent={activeHeadingId}
      activeChild={activeSubheadingId}
      style={sidebarStyle}
    />
  );
}

export default InvestingPlanSideNav;
