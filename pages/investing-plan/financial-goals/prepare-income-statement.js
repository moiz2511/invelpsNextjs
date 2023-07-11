import InvestingPlanSideNav from "@/components/investingPlan/InvestingPlanSideNav";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import styles from "@/styles/BasicPage.module.css";
import TableOfContent from "@/components/TableOfContent";
import InfoModal from "@/components/InfoModal";
import modalStyles from "@/styles/InfoModal.module.css";
import CustomTable from "@/components/Table";
import NetIncomeCalculator from "@/components/investingPlan/NetIncomeCalculator";
import CashflowCalculator from "@/components/investingPlan/CashflowCalculator";
import NumberWithLabel from "@/components/NumberWithLabel";
import PieChart from "@/components/PieChart";
import SwitchButton from "@/components/SwitchButton";
import Link from "next/link";

const links = [
  {
    value: "Prepare income statement",
    link: "#prepare",
  },
  {
    value: "What is your net Income?",
    link: "#netincome",
  },
];

function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [showMonthlyNetincomGraph, setShowMonthlyNetincomeGraph] =
    useState(false);
  const [monthlyNetincome, setMonthlyNetincome] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    netIncome: 0,
    savingCapacity: 0,
  });
  const [yearlyNetincome, setYearlyNetincome] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    netIncome: 0,
    savingCapacity: 0,
  });

  // ---------
  const [showMonthlyCashflowGraph, setShowMonthlyCashflowGraph] =
    useState(false);
  const [monthlyCashflow, setMonthlyCashflow] = useState({
    economicActivities: 0,
    investingActivities: 0,
    financingActivities: 0,
    netCashFlow: 0,
  });
  const [yearlyCashflow, setYearlyCashflow] = useState({
    economicActivities: 0,
    investingActivities: 0,
    financingActivities: 0,
    netCashFlow: 0,
  });
  // ----------
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const toggleSidebarOnPhone = () => {
    setDisplaySidebar(!displaySidebar);
  };
  return (
    <Layout
      nextUrl={"/investing-plan/financial-goals/prepare-cashflow-statement"}
      toggleSidebarOnPhone={toggleSidebarOnPhone}
      phoneSidebarOpen={displaySidebar}
    >
      <PageHeader
        parentHeading={
          <Link href="/investing-plan/financial-goals/set-financial-goals">
            Investing plan
          </Link>
        }
        childHeading="Funding Investment"
        setOpenModal={setOpenModal}
        showMoreInfo={true}
      />
      <InfoModal
        open={openModal}
        setOpen={setOpenModal}
        heading="Prepare your income and clashflow statement"
        content={
          <div className={styles}>
            <div className={styles.content}>
              <h1>What is an income statement?</h1>
              <p>
                Income statement financial statement that starts with revenue
                and deducts costs and expenses to arrive at net income.
              </p>
            </div>
            <div className={styles.content}>
              <CustomTable
                primary={true}
                columns={["Line Item", "Description"]}
                rows={[
                  {
                    first: "Gross income",
                    second:
                      "The total amount received by an individual including salaries, wages, and bonuses received from employment or self employment, dividends and and distributions received from investments, rental receipts from real estate investments, and profit sharing from businesses.",
                  },
                  {
                    first: "Taxes",
                    second:
                      "Mandatory contributions levied on individuals or corporations by a government as Income Tax, Payroll Tax, Corportate tax, Property tax.",
                  },
                  {
                    first: "Cost of living",
                    second:
                      "Expenditures to satisfy daily needs such as food, clothing, housing (rent), energy, transportation, durable goods (especially cars), health, recreation and other services.",
                  },
                  {
                    first: "Financial expenses",
                    second:
                      "Interest and /or annuity paid to third party from debt (Property loans, Mortgage, Consumer Loans).",
                  },
                  {
                    first: "Net income",
                    second:
                      "Amount of money left after taxes, Cost of Living and financial expenses are deducted from gross income.",
                  },
                ]}
              />
            </div>
            <div className={styles.content}>
              <h1>What is a gross income?</h1>
              <p>
                <b> Gross Income</b> represents an individual&apos;s total
                annual earnings prior to any deductions or taxes paid to the
                government.
                <p>
                  In the case of a business, gross income, or “gross profit”, is
                  the residual profits after subtracting its cost of goods
                  (COGS).
                </p>
              </p>
            </div>
            <div className={styles.content}>
              <div className={modalStyles.codebox}>
                <p>
                  <span className={modalStyles.greenColor}>
                    Gross income ={" "}
                  </span>
                  <b>∑ Income earned</b>
                </p>
              </div>
            </div>
            <div className={styles.content}>
              <p>
                For companies, gross income – more often reported as{" "}
                <b>“Gross Profit”</b> – is calculated by subtracting the cost of
                goods sold (COGS) from its revenue for the year.
              </p>
            </div>
            <div className={styles.content}>
              <div className={modalStyles.codebox}>
                <p>
                  <span className={modalStyles.greenColor}>Gross Profit</span>
                  <b> = Revenue – Cost of Goods sold</b>
                </p>
              </div>
            </div>
            <div className={styles.content}>
              <p>
                <b>Revenue:</b> The amount of sales generated by the company
                from selling its products or services.
              </p>
              <p>
                <b>Cost of Goods Sold:</b> COGS are the expenses incurred that
                are directly tied to its revenue model such as the cost of
                material and the cost of direct labor.
              </p>
              <p>
                The lower the company’s COGS, the higher its gross
                profit and gross margin (and vice versa).
              </p>
            </div>
            <div className={styles.content}>
              <h1>What are a the individual income sources?</h1>
              <p style={{ marginBottom: "20px" }}>
                Individual income includes compensation from a number of
                sources, including:
              </p>
              <CustomTable
                primary={true}
                columns={["Income sources", "Description"]}
                rows={[
                  {
                    first: "Salary, Wages",
                    second:
                      "Salaries, Wages and bonuses received from employment or self-employment, Workers’ Compensation.",
                  },
                  {
                    first: "Business income",
                    second: "Income from side economic activities.",
                  },
                  {
                    first: "Financial income",
                    second:
                      "Interest Income (e.g. Certificate of Deposit, Checking Account, Savings Account), Dividends and distributions received from investments, Rental receipts from real estate investments, Capital gain from investment, Proceeds from Life Insurance, Profit sharing from businesses",
                  },
                  {
                    first: "Other income sources",
                    second:
                      "Royalties, pensions, Inheritance, Workers’ Compensation, Gifts, Voluntary Benefits.",
                  },
                ]}
              />
              <p style={{ marginTop: "20px" }}>
                The gross income of an individual is the starting point from
                which the taxable income is calculated.
              </p>
            </div>
            <div className={styles.content}>
              <h1>What is a net income?</h1>
              <p>
                Net income is the amount of money belonging to the individual
                left over once taxes and deductions are deducted from gross
                income. The evolution of net income as a percentage of gross
                income (net income margin) tends to be more predictable for an
                individual than for a company. Indeed, the needs of an
                individual or a household, which are the main sources of
                expenditure, although changing over time, remain fairly stable.
              </p>
              <p>
                A company&apos;s expenses, on the other hand, are impacted by a
                greater number of variables that affect the company&apos;s
                profitability.
              </p>
              <p>
                If the <b>net margin fluctuates greatly</b>, it means that the
                individual or company must review its expenses and implement
                budget cuts to improve profitability by{" "}
                <b>eliminating or reducing non-essential costs.</b>
              </p>
            </div>
            <div className={styles.content}>
              <h1>
                What are a the common expense types and categories for an
                individual or an household?
              </h1>
              <p>
                Individual or household expenditures are the final consumption
                expenditures made <b>to satisfy their daily needs</b> such as
                food, clothing, housing (rent), energy, transportation, durable
                goods (especially cars), health, recreation and other services
                and <b>pay their obligations</b> (taxes, mortgage, property
                loans for housing and consumer loans). These expenses can be
                broken down as follows:
              </p>
            </div>
            <div className={styles.content}>
              <CustomTable
                primary={true}
                columns={[
                  "Expense categories",
                  "Cost of Living (Daily needs)",
                  "Obligations (toward government or third party)",
                ]}
                rows={[
                  {
                    first: "Goverment",
                    second: "",
                    third:
                      "Payroll taxes, Income taxes, property taxes, other taxes",
                  },
                  {
                    first: "Financials",
                    second: "",
                    third: "Property Loans, Mortgage, Consumer Loans",
                  },
                  {
                    first: "Real Estate",
                    second: "Housing (Rent)",
                    third: "",
                  },
                  {
                    first: "Utilities",
                    second: "Electricity, Gas, Water",
                    third: "",
                  },
                  {
                    first: "Comsumer staples",
                    second: "Food, Cosmetics, Household products",
                    third: "",
                  },
                  {
                    first: "Health Care",
                    second: "Drugs, Medical Equipment and Services, Insurance",
                    third: "",
                  },
                  {
                    first: "Consumer discretionary",
                    second:
                      "Clothing, Home furnishing, Leisure Products, Travel, Restaurants",
                    third: "",
                  },
                  {
                    first: "Communication and services",
                    second: "Internet, Telephone",
                    third: "",
                  },
                  {
                    first: "Tansportation",
                    second: "Public transportation, Car expenses",
                    third: "",
                  },
                ]}
              />
            </div>
            <div className={styles.content}>
              <h1>What is a cash flow statement?</h1>
              <p style={{ marginBottom: "20px" }}>
                 The <b>Cash flow statement (CFS)</b> tracks each inflow and
                outflow of cash from operating, investing, and financing
                activities across a specified period to reveal the{" "}
                <b>Net Cash flow.</b>
              </p>
              <CustomTable
                primary={true}
                columns={["Cash flow types", "Description"]}
                rows={[
                  {
                    first: "Cash flow from Operating activities",
                    second:
                      "Cash flow coming in from economic activities. The starting line item is net income – the “bottom line” of the income statement",
                  },
                  {
                    first: "Cash flow from Investing activities",
                    second:
                      "Cash flow going out  in investments  vehicles such Stock, Bonds, Deposits, Funds, Life insurance, Retirement plan …",
                  },
                  {
                    first: "Cash flow from Financing activities",
                    second:
                      "Cash flow impact from raising capital through debt: interest and annuity paid on debt (property loans, mortgage, consumer loans)",
                  },
                ]}
              />
            </div>
            <div className={styles.content}>
              <h1>What is a net cash flow?</h1>
              <p>
                The net <b>Cash Flow</b> is the difference between the money
                coming in (“inflows”) and the money going out (“outflows”) over
                a specified period. The capacity to generate sustainable,
                positive cash flows determines future growth prospects, ability
                to reinvest in maintaining past growth (or excess growth),
                expand profit margins, and operate as a “going concern” over the
                long run.
              </p>
              <ul className={modalStyles.list}>
                <li>
                  <b>Cash Inflows:</b> Money that comes into an
                  individual&apos;s pocket (&quot;Sources&quot;)
                </li>
                <li>
                  <b>Cash Outflows:</b> The money that comes out of pockets
                  (&quot;Use&quot;).
                </li>
              </ul>
              <div className={modalStyles.codebox}>
                <p>
                  <span className={modalStyles.greenColor}>
                    Net cash flow= Cash flow from Operating + Cash flow from
                    Investing + Cash flow from Financing
                  </span>
                </p>
              </div>
            </div>
          </div>
        }
      />
      <div className={styles.container}>
        <InvestingPlanSideNav
          activeHeadingId={2}
          activeSubheadingId={2.2}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <TableOfContent links={links} />
          <div className={styles.contentContainer}>
            {/* <div className={styles.content} id="fund-your-investment">
              <h1>Where do you get money to fund your Investment plan ?</h1>
              <p>
                To invest, the first thing we need is a good financial
                education. Once that foundation is established, we need
                experience and that experience requires money to invest. Where
                do we get that money?
              </p>
            </div>
            <div className={styles.content} id="gross-income">
              <h1>What is your gross income?</h1>
              <p>
                The gross income also called individual income refers to the
                total compensation received by an individual. Individual income
                is either from a single source or from several sources. List all
                sources of money coming in and the monthly and yearly amount
                received from each source.
              </p>
            </div>
            <div className={styles.content} id="spend">
              <h1>How much do you spend and in what?</h1>
              <p>
                Individual income is also called gross income because it is
                subject to taxation and other expenditures related to household
                consumption. List all your expense items and the amount spent
                monthly and annually on each item.
              </p>
            </div> */}
            <div className={styles.content} id="prepare">
              <h1>Prepare income statement:</h1>
              <p>Fill the different item to calculate your net income</p>
              <NetIncomeCalculator
                setMonthlyNetincome={setMonthlyNetincome}
                setYearlyNetincome={setYearlyNetincome}
              />
            </div>
            <div className={styles.content} id="netincome">
              <h1>What is your net Income?</h1>
              <p>
                Your net income is the difference between the total value of all
                your incomes and all your costs and expenses. It is the profit
                or the loss after all expenses are deducted from Revenue.
              </p>
              <div style={{ margin: "20px 0" }}>
                <SwitchButton
                  checked={showMonthlyNetincomGraph}
                  onChecked={setShowMonthlyNetincomeGraph}
                  onOnLabel={"Monthly"}
                  onOffLabel={"Yearly"}
                />
              </div>
              {/*  */}
              {!showMonthlyNetincomGraph ? (
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ width: "400px" }}>
                    {monthlyNetincome.netIncome ? (
                      <PieChart
                        data={{
                          labels: [
                            "Total Income",
                            "Net Income",
                            "Total Expenses",
                            "Saving Capacity",
                          ],
                          datasets: [
                            {
                              label: "",
                              data: [
                                monthlyNetincome.totalIncome,
                                monthlyNetincome.netIncome,
                                monthlyNetincome.totalExpenses,
                                monthlyNetincome.savingCapacity,
                              ],
                              backgroundColor: [
                                "#ccbf90",
                                "#407879",
                                "#cb6843",
                                "#ff9002",
                              ],
                              hoverOffset: 4,
                            },
                          ],
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      alignItems: "center",
                      justifyContent: "",
                      gridGap: "50px",
                      height: "fit-content",
                    }}
                  >
                    <NumberWithLabel
                      labelText={"Total Income"}
                      mainText={`$${
                        monthlyNetincome.totalIncome <= 0
                          ? "0"
                          : monthlyNetincome.totalIncome
                      }`}
                    />

                    <NumberWithLabel
                      labelText={"Total Expenses"}
                      mainText={`$${
                        monthlyNetincome.totalExpenses <= 0
                          ? "0"
                          : monthlyNetincome.totalExpenses
                      }`}
                      mainTextStyle={{
                        color: "var(--primary-orange)",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Net Income"}
                      mainText={`$${
                        monthlyNetincome.netIncome <= 0
                          ? "0"
                          : monthlyNetincome.netIncome
                      }`}
                      mainTextStyle={{
                        color: "var(--secondary-color)",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Saving Capacity"}
                      mainText={`$${
                        monthlyNetincome.savingCapacity <= 0
                          ? "0"
                          : monthlyNetincome.savingCapacity
                      }`}
                      mainTextStyle={{
                        color: "#ff9002",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ width: "400px" }}>
                    {yearlyNetincome.netIncome ? (
                      <PieChart
                        data={{
                          labels: [
                            "Total Income",
                            "Net Income",
                            "Total Expenses",
                            "Saving Capacity",
                          ],
                          datasets: [
                            {
                              label: "",
                              data: [
                                yearlyNetincome.totalIncome,
                                yearlyNetincome.netIncome,
                                yearlyNetincome.totalExpenses,
                                yearlyNetincome.savingCapacity,
                              ],
                              backgroundColor: [
                                "#ccbf90",
                                "#407879",
                                "#cb6843",
                                "#ff9002",
                              ],
                              hoverOffset: 4,
                            },
                          ],
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      alignItems: "center",
                      justifyContent: "",
                      gridGap: "50px",
                      height: "fit-content",
                    }}
                  >
                    <NumberWithLabel
                      labelText={"Total Income"}
                      mainText={`$${
                        yearlyNetincome.totalIncome <= 0
                          ? "0"
                          : yearlyNetincome.totalIncome
                      }`}
                    />
                    <NumberWithLabel
                      labelText={"Total Expenses"}
                      mainText={`$${
                        yearlyNetincome.totalExpenses <= 0
                          ? "0"
                          : yearlyNetincome.totalExpenses
                      }`}
                      mainTextStyle={{
                        color: "var(--primary-orange)",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Net Income"}
                      mainText={`$${
                        yearlyNetincome.netIncome <= 0
                          ? "0"
                          : yearlyNetincome.netIncome
                      }`}
                      mainTextStyle={{
                        color: "var(--secondary-color)",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Saving Capacity"}
                      mainText={`$${
                        yearlyNetincome.savingCapacity <= 0
                          ? "0"
                          : yearlyNetincome.savingCapacity
                      }`}
                      mainTextStyle={{
                        color: "#ff9002",
                      }}
                    />
                  </div>
                </div>
              )}
              {/*  */}
            </div>
            {/* <div className={styles.content} id="coming-in-going-out">
              <h1>How much are coming in and going out?</h1>
              <p>
                You may notice that items such as payments to retirement plan
                and other savings vehicles are not listed in the Personal income
                statement. Yes, these items do impact your cash flow, but they
                are not expenses, the amounts that you invest are essentially
                assets that benefit your financial situation versus expenses
                that don’t help you build wealth. Identifying how much money you
                have coming in and going out will show you how much is left
                over—that’s the money you can save. Taking a close look at your
                spending can also help identify areas where you could spend less
                if you want to put more cash toward your goals. You may notice
                that the expenses doesn’t include.
              </p>
              <p>
                Plug the amount of your net income, total invested amount and
                debt repayment into the below Cash Flow calculator to see your
                net cash flow.
              </p>
            </div> */}
            {/* <div className={styles.content} id="net-income">
              <h1>Net Cash flow calculator – Cash flow statement:</h1>
              <p>Fill the different item to calculate your net cash flow</p>
              <CashflowCalculator
                setMonthlyCashflow={setMonthlyCashflow}
                setYearlyCashflow={setYearlyCashflow}
              />
            </div> */}
            {/* <div className={styles.content} id="positive-cash-flow">
              <h1>Do you have a positive net cash flow?</h1>
              <p>
                Doing a cash flow statement is not just about finding money in
                your financial situation to fund your investing program. First
                and foremost, it’s about your financial well-being. Are you
                managing your finances well or not?
              </p>

              <div style={{ margin: "20px 0" }}>
                <SwitchButton
                  checked={showMonthlyCashflowGraph}
                  onChecked={setShowMonthlyCashflowGraph}
                  onOnLabel={"Monthly"}
                  onOffLabel={"Yearly"}
                />
              </div>
              {!showMonthlyCashflowGraph ? (
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ width: "400px" }}>
                    {monthlyCashflow.netCashFlow ? (
                      <PieChart
                        data={{
                          labels: [
                            "Cash flow from economic activities",
                            "Cash flow from investing activities",
                            "Cash flow from financing activities",
                            "Cash on hand",
                          ],
                          datasets: [
                            {
                              label: "",
                              data: [
                                monthlyCashflow.economicActivities,
                                monthlyCashflow.investingActivities,
                                monthlyCashflow.financingActivities,
                                monthlyCashflow.netCashFlow,
                              ],
                              backgroundColor: [
                                "#ccbf90",
                                "#407879",
                                "#cb6843",
                                "#ffba00",
                              ],
                              hoverOffset: 4,
                            },
                          ],
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      alignItems: "center",
                      justifyContent: "",
                      gridGap: "50px",
                      height: "fit-content",
                    }}
                  >
                    <NumberWithLabel
                      labelText={"Cash flow from economic activities"}
                      mainText={`$${
                        monthlyCashflow.economicActivities <= 0
                          ? "0"
                          : monthlyCashflow.economicActivities
                      }`}
                      mainTextStyle={{
                        color: "#ccbf90",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Cash flow from investing activities"}
                      mainText={`$${
                        monthlyCashflow.investingActivities <= 0
                          ? "0"
                          : monthlyCashflow.investingActivities
                      }`}
                      mainTextStyle={{
                        color: "#407879",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Cash flow from financing activities"}
                      mainText={`$${
                        monthlyCashflow.financingActivities <= 0
                          ? "0"
                          : monthlyCashflow.financingActivities
                      }`}
                      mainTextStyle={{
                        color: "#cb6843",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Cash on hand"}
                      mainText={`$${
                        monthlyCashflow.netCashFlow <= 0
                          ? "0"
                          : monthlyCashflow.netCashFlow
                      }`}
                      mainTextStyle={{
                        color: "#ffba00",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ width: "400px" }}>
                    {yearlyCashflow.netCashFlow ? (
                      <PieChart
                        data={{
                          labels: [
                            "Cash flow from economic activities",
                            "Cash flow from investing activities",
                            "Cash flow from financing activities",
                            "Cash on hand",
                          ],
                          datasets: [
                            {
                              label: "",
                              data: [
                                yearlyCashflow.economicActivities,
                                yearlyCashflow.investingActivities,
                                yearlyCashflow.financingActivities,
                                yearlyCashflow.netCashFlow,
                              ],
                              backgroundColor: [
                                "#ccbf90",
                                "#407879",
                                "#cb6843",
                                "#ffba00",
                              ],
                              hoverOffset: 4,
                            },
                          ],
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      alignItems: "center",
                      justifyContent: "",
                      gridGap: "50px",
                      height: "fit-content",
                    }}
                  >
                    <NumberWithLabel
                      labelText={"Cash flow from economic activities"}
                      mainText={`$${
                        yearlyCashflow.economicActivities <= 0
                          ? "0"
                          : yearlyCashflow.economicActivities
                      }`}
                      mainTextStyle={{
                        color: "#ccbf90",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Cash flow from investing activities"}
                      mainText={`$${
                        yearlyCashflow.investingActivities <= 0
                          ? "0"
                          : yearlyCashflow.investingActivities
                      }`}
                      mainTextStyle={{
                        color: "#407879",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Cash flow from financing activities"}
                      mainText={`$${
                        yearlyCashflow.financingActivities <= 0
                          ? "0"
                          : yearlyCashflow.financingActivities
                      }`}
                      mainTextStyle={{
                        color: "#cb6843",
                      }}
                    />
                    <NumberWithLabel
                      labelText={"Cash on hand"}
                      mainText={`$${
                        yearlyCashflow.netCashFlow <= 0
                          ? "0"
                          : yearlyCashflow.netCashFlow
                      }`}
                      mainTextStyle={{
                        color: "#ffba00",
                      }}
                    />
                  </div>
                </div>
              )}
              {/*  */}
            {/* </div> */}
            {/* <div className={styles.content} id="positive-cash-flow"> */}
            {/* <h1>Where can you improve the results? </h1>
            <p>
              The more you can increase your income and decrease your expenses,
              the better. Here are some questions to ask yourself:
            </p> */}
            {/* <ul className={modalStyles.list}>
              <li>
                How can you increase your income? Do you have hobbies,
                interests, or skills that can generate extra cash for you?
              </li>
              <li>
                Can you get more paid overtime at work? How about a promotion or
                a job change?
              </li>
              <li>Where can you cut expenses?</li>
              <li>
                Have you categorized your expenses as either “necessary” or
                “nonessential”?
              </li>
              <li>
                Can you lower your debt payments by refinancing or consolidating
                loans and credit card balances?
              </li>
              <li>
                Have you shopped around for lower insurance or telephone rates?
              </li>
              <li>
                Have you analyzed your tax withholdings in your paycheck to make
                sure that you’re not overpaying your taxes?
              </li>
            </ul> */}
            {/* <p style={{ marginTop: "20px" }}>
              Just meeting our daily needs (rent, food, bills, clothing,
              transportation, health) can take up a large portion of your
              monthly income. But life doesn&apos;t stop there, we also have
              medium and long term goals, travel or buying a house,
              children&apos;s education, retirement and sometimes unplanned
              emergencies to consider. Know that you can build your financial
              future to achieve your goals while enjoying life with a financial
              plan.
            </p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
