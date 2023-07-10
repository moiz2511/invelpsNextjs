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
      main: "1. Financial Goals",
      link: "/investing-plan/financial-goals/set-financial-goals",
      subs: [],
    },
    {
      id: 2,
      main: "2. Funding Investment",
      subs: [
        {
          id: 2.1,
          value: "1. Balance sheet",
          link: "/investing-plan/financial-goals/prepare-balance-sheet",
        },
        {
          id: 2.2,
          value: "2. Income statement",
          link: "/investing-plan/financial-goals/prepare-income-statement",
        },
        {
          id: 2.3,
          value: "3. Cashflow statement",
          link: "/investing-plan/financial-goals/prepare-cashflow-statement",
        },
      ],
    },
    {
      id: 3,
      main: "3. Time Horizon",
      subs: [
        {
          id: 3.1,
          value: "1. Saving Length",
          link: "/investing-plan/time-horizon/saving-length",
        },
        {
          id: 3.2,
          value: "2. Time Value Of Money",
          link: "/investing-plan/time-horizon/time-value",
        },
      ],
    },
    {
      id: 4,
      main: "4. RISK AND RETURNS",
      subs: [
        {
          id: 4.1,
          value: "1. Asset risks and returns",
          link: "/investing-plan/risks-and-return/asset",
        },
        {
          id: 4.2,
          value: "2. Risk tolerance",
          link: "/investing-plan/risks-and-return/tolerance",
        },
      ],
    },
    {
      id: 5,
      main: "5. Portfolio Settings",
      subs: [
        {
          id: 5.1,
          value: "1. Assert allocation model",
          link: "/investing-plan/portfolio-settings/asset-allocation-model",
        },
        {
          id: 5.2,
          value: "2. Set your allocation",
          link: "/investing-plan/portfolio-settings/set-your-allocation",
        },
        {
          id: 5.3,
          value: "3. Portfolio Management",
          link: "/investing-plan/portfolio-settings/portfolio-management",
        },
      ],
    },
    {
      id: 6,
      main: "6. INVESTMENT STRATEGIES",
      subs: [
        {
          id: 6.1,
          value: "1. Analysis Method Overview",
          link: "/investing-plan/investment-strategies/analysis-method-overview",
        },
        {
          id: 6.2,
          value: "2. Analysis Method Comparison",
          link: "/investing-plan/investment-strategies/analysis-method-comparison",
        },
        {
          id: 6.3,
          value: "3. Investor Profile",
          link: "/investing-plan/investment-strategies/investor-profile",
        },
      ],
    },
    {
      id: 7,
      main: "7. MONITORING",
      link: "/coming-soon",
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
