import InvestingPlanSideNav from "@/components/investingPlan/InvestingPlanSideNav";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import TableOfContent from "@/components/TableOfContent";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import styles from "@/styles/BasicPage.module.css";
import InfoModal from "@/components/InfoModal";
import NumberWithLabel from "@/components/NumberWithLabel";
import TotalAssetCalculator from "@/components/investingPlan/TotalAssetCalculator";
import TotalLiabilitiesCalculator from "@/components/investingPlan/TotalLiabilitiesCalculator";
import { DateTime } from "luxon";
import PieChart from "@/components/PieChart";
import modalStyles from "@/styles/InfoModal.module.css";
import CustomTable from "@/components/Table";
import Link from "next/link";

const links = [
  {
    value: "Prepare balance sheet.",
    link: "#prepare",
  },
  {
    value: "What is your net worth?",
    link: "#networth",
  },
  {
    value: "Could you make any change to increase your net worth?",
    link: "#increase-networth",
  },
];
function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalLiabilities, setTotalLiabilities] = useState(0);
  const [netWorth, setNetWorth] = useState(0);
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const toggleSidebarOnPhone = () => {
    setDisplaySidebar(!displaySidebar);
  };

  const changeTotalAssets = useCallback((e) => {
    setTotalAssets(e);
  }, []);

  const changeTotalLiabilities = useCallback((e) => {
    console.log(e);
    setTotalLiabilities(e);
  }, []);

  useEffect(() => {
    setNetWorth(totalAssets - totalLiabilities);
  }, [totalLiabilities, totalAssets]);
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
        childHeading="Prepare your balance sheet"
        setOpenModal={setOpenModal}
        showMoreInfo={true}
      />

      <InfoModal
        open={openModal}
        setOpen={setOpenModal}
        heading="Prepare your balance sheet"
        content={
          <div className={styles}>
            <div className={styles.content}>
              <h1>What is a personal balance sheet?</h1>
              <p>
                The personal Balance sheet provides a snapshot of a individual’s
                wealth at a specific point in time. It shows the the carrying
                values of an individual’s assets and liabilities at a specific
                point in time. Conceptually, the assets of an individual (i.e.
                the resources belonging to the indivudal) have all been funded
                somehow, and its liabilities present the funding source of some
                of his assets (i.e. how the resourceswere purchased).
              </p>
            </div>
            <div className={styles.content}>
              <h1>What are a the assets?</h1>
              <p>
                Assets describe resources belonging to the individual with an
                economic value that can be sold for money or have the potential
                to provide monetary benefits someday in the future. The assets
                section in Balance sheet is ordered in terms of liquidity i.e.
                the individual’s assets are ranked by how quickly the asset can
                be liquidated and turned into cash on hand.
                <p>Consequently, they are separated in two main categories :</p>
              </p>
              <ul className={modalStyles.list}>
                {/* --- */}
                <li>
                  Current or Short term assets: They are assets than can be
                  converted into cash quickly
                </li>
                {/* -- */}
                <li>
                  Non Current or Long term assets: they are assets than cannot
                  be converted into cash in short term period.
                </li>
                {/* --- */}
              </ul>
            </div>
            <div className={styles.content}>
              <CustomTable
                primary={true}
                columns={["Current Asset (Short term)", "Description"]}
                rows={[
                  {
                    first: "Cash and Cash Equivalents",
                    second:
                      "The starting line item for practically all balance sheet, cash and other highly liquid cash-like  cash on Hand, outstanding money in checking and saving account",
                  },
                  {
                    first: "Short term investment",
                    second:
                      "Short-term investment owned by an individual that can be liquidated to cash relatively quickly like stock, funds, life insurance, treasury bills.",
                  },
                  {
                    first: "Other current assets",
                    second:
                      "In this item, we include the unfulfilled payments owed to an individual by its borrowers, or advance tax credit from government or any other resource owned that can be turned into cash.",
                  },
                ]}
              />
            </div>
            <div className={styles.content}>
              <CustomTable
                primary={true}
                columns={["Non Current Asset (Long term)", "Description"]}
                rows={[
                  {
                    first: "Property and Equipment",
                    second:
                      "Those assets refer to fixed asses like your home, vehicles and other tangible assets with an economic value that cannot be liquidated in a short term period.",
                  },
                  {
                    first: "Long term investment",
                    second:
                      "Long-term investment refer to financial investment such as Retirement plan, real estate investment, or tax incentive investment.",
                  },
                  {
                    first: "Other non current assets",
                    second:
                      "In this last item, we gather any other iliquid assets which don’t fall in above items like art, antique, wine.",
                  },
                ]}
              />
            </div>
            <div className={styles.content}>
              <h1>What are a the Liabilities?</h1>
              <p>
                Liabilities are the amount of money owed to others. They include
                all kinds of obligations like money borrowed from a bank, money
                owed to suppliers for services or goods delivered. Similar to
                assets, they are listed in terms of how soon you need to pay
                them, ie short or long term maturity.
              </p>
              <ul className={modalStyles.list}>
                {/* --- */}
                <li>
                  <b>Current liabilities:</b> the short term liabilities that
                  have to be paid in near term, within one year max.
                </li>
                {/* -- */}
                <li>
                  <b>Non Current or Long term liabilities:</b> the long-term
                  liabilities that are not expected to be paid for at least one
                  year
                </li>
                {/* --- */}
              </ul>
            </div>
            <div className={styles.content}>
              <CustomTable
                primary={true}
                columns={["Current Liabilities (Short term)", "Description"]}
                rows={[
                  {
                    first: "Invoices payable",
                    second:
                      "They represent the unpaid bills owed to suppliers and vendors for services or products already received (Communication bills, energy bills)",
                  },
                  {
                    first: "Short term debt",
                    second:
                      "Short-term debt have maturity dates that are coming due within the next twelve months (including the current portion of long-term debt) like the current portion of the car lease, credit card, consummer loan.",
                  },
                  {
                    first: "Other current liabilities",
                    second:
                      "Other current liabilities gather items like Income tax, property tax.",
                  },
                ]}
              />
            </div>
            <div className={styles.content}>
              <CustomTable
                primary={true}
                columns={["Non Current Liabilities (L term)", "Description"]}
                rows={[
                  {
                    first: "Long term liabilities",
                    second:
                      "Long term obligation like car Lease  which allows an individual to lease a car  for an agreed-upon duration in exchange for regular payments.",
                  },
                  {
                    first: "Long term debt",
                    second:
                      "Long-term debt represents any debt obligations with maturity dates that do not come due for at least one year, i.e. maturity exceeds twelve months like Bank loan, Mortgage.",
                  },
                  {
                    first: "Other Long term liabilities",
                    second:
                      "Other Long term liabilities are items like Deferred taxes.",
                  },
                ]}
              />
            </div>
          </div>
        }
      />

      <div className={styles.container}>
        <InvestingPlanSideNav
          activeHeadingId={2}
          activeSubheadingId={2.1}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <TableOfContent links={links} />
          <div className={styles.contentContainer}>
            {/* <div className={styles.content} id="current-situation">
              <h1>Establish your current situation</h1>
              <p>
                Regardless of the goals of your investment plan, the first step
                is to determine how much you have and how much you owe. This
                first step will help you know how much money you can afford to
                invest. To do this, prepare and review your balance sheet.
              </p>
              <p style={{ marginTop: "10px" }}>
                A{" "}
                <b>
                  Balance sheet is a snapshot of your wealth at a given moment.
                </b>{" "}
                It lists your assets (things you own), your liabilities (things
                you owe) and the current value of each item. It allows to
                determine your net worth, your total assets minus your total
                liabilities.
              </p>
            </div> */}
            {/* <div className={styles.content} id="emerygency-fund">
              <h1>Do you have an emergency fund?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div> */}
            {/* <div className={styles.content} id="asset-owned">
              <h1>What do you own (assets)?</h1>
              <p>
                Assets are things you own with economic value that can be
                converted into cash more or less quickly.
              </p>
              <p style={{ marginTop: "10px" }}>
                List your assets in descending order (from short term to long
                term)of liquidity. Liquidity refers to how quickly you can
                convert a particular asset into cash.
              </p>
            </div> */}
            {/* <div className={styles.content} id="liabilities-owed">
              <h1>What do you owe (liabilities)?</h1>
              <p>
                Liabilities are simply the bills that you have to pay or the
                debt that you owe to a third party.
              </p>
              <p style={{ marginTop: "10px" }}>
                List your obligations and debt in descending order (from short
                term to long term) of maturity. The maturity refers to how soon
                you need to pay them.
              </p>
            </div> */}
            <div className={styles.content} id="prepare">
              <h1>Personal Balance sheet:</h1>
              <p>Fill the different item to calculate your net worth</p>
              <div className={styles.calculatorContainer}>
                <TotalAssetCalculator setTotalAssets={changeTotalAssets} />
                <TotalLiabilitiesCalculator
                  setTotalLiabilities={changeTotalLiabilities}
                />
              </div>
            </div>
            <div className={styles.content} id="networth">
              <h1>What is your net worth?</h1>
              <p>
                Your net worth is the difference between the total value of all
                your assets and all your liabilities. It is an indication of
                your net worth at a given time.
              </p>
              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <div style={{ width: "400px" }}>
                  {netWorth ? (
                    <PieChart
                      data={{
                        labels: [
                          "Total Assets",
                          "Net Worth",
                          "Total Liabilities",
                        ],
                        datasets: [
                          {
                            label: "",
                            data: [
                              totalAssets,
                              netWorth < 0 ? 0 : netWorth,
                              totalLiabilities,
                            ],
                            backgroundColor: ["#ccbf90", "#407879", "#cb6843"],
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
                    labelText={"As at Date"}
                    mainText={DateTime.now().toFormat("yyyy.MM.dd")}
                    // tyle={{ borderRight: "1px solid lightgray" }}
                  />
                  <NumberWithLabel
                    labelText={"Total Assets"}
                    mainText={`$${totalAssets <= 0 ? "0" : totalAssets}`}
                    // style={{ width: "1px solid lightgray" }}
                  />
                  <NumberWithLabel
                    labelText={"Total Liabilities"}
                    mainText={`$${
                      totalLiabilities <= 0 ? "0" : totalLiabilities
                    }`}
                    mainTextStyle={{
                      color: "var(--primary-orange)",
                    }}
                    style={
                      {
                        // borderRight: "1px solid lightgray",
                        // paddingLeft: "20px",
                      }
                    }
                  />
                  <NumberWithLabel
                    labelText={"Net Worth"}
                    mainText={`$${netWorth <= 0 ? "0" : netWorth}`}
                    mainTextStyle={{
                      color: "var(--secondary-color)",
                    }}
                    // style={{ paddingLeft: "20px" }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.content} id="increase-networth">
              <h1>Could you make any change to increase your net worth?</h1>
              <p>
                Balance sheet displays the accumulation of your economic flows
                before at a given time. To identify how to increase your net
                worth, you should establish your Income statement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
