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
const links = [
  {
    value: "Establish your current situation.",
    link: "#current-situation",
  },
  // {
  //   value: "Do you have an emergency fund?",
  //   link: "#emergency-fund",
  // },
  {
    value: "What do you own (assets)?",
    link: "#asset-owned",
  },
  {
    value: "What do you owe (liabilities)?",
    link: "#liabilities-owed",
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
    <Layout>
      <PageHeader
        parentHeading="Investing plan"
        childHeading="Prepare your balance sheet"
        setOpenModal={setOpenModal}
        showMoreInfo={true}
      />
      <InfoModal
        open={openModal}
        setOpen={setOpenModal}
        heading="Prepare your balance sheet"
        content={
          <div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              aliquet sapien euismod feugiat consequat. Sed at vulputate urna,
              eu varius lacus. Fusce elementum libero congue augue laoreet,
              vitae laoreet orci faucibus. Etiam tristique nibh elit, a tempus
              ipsum ultricies at. Sed aliquet magna nec nunc lacinia, eu tempor
              purus hendrerit. Nunc vitae bibendum mi, cursus scelerisque
              mauris. Donec at lorem sit amet diam fermentum aliquam a porttitor
              mauris. Suspendisse sapien nibh, placerat ac pharetra vel, lacinia
              ut lacus. Donec ultricies tellus sit amet ultrices vehicula.
              Praesent eu ligula eu urna aliquam tempus eu quis leo. Suspendisse
              commodo nulla turpis, at ultricies urna finibus in. Phasellus quis
              condimentum diam. Sed et laoreet dui. Sed at ante ac purus
              porttitor bibendum at ut enim. Aenean ipsum magna, rutrum id velit
              non, rhoncus semper ipsum.
            </p>
            <p>
              Nam quis purus tincidunt, eleifend risus vitae, sollicitudin
              lorem. Praesent feugiat arcu ac massa ullamcorper iaculis sed eu
              massa. Suspendisse ac cursus nisi, non faucibus leo. Nulla lectus
              mi, tincidunt non libero a, facilisis accumsan odio. Aliquam
              posuere malesuada nulla. Proin nunc diam, tempus eget vehicula
              eget, fermentum nec augue. Vestibulum pharetra, sem et venenatis
              iaculis, dolor libero malesuada purus, ac aliquet odio erat eget
              risus.
            </p>
            <p>
              In quis augue vel dui tempus dignissim ac in urna. Sed commodo
              purus eu consectetur convallis. Fusce porttitor volutpat
              elementum. Nunc velit purus, vehicula at pulvinar accumsan,
              consectetur euismod ex. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Donec fermentum,
              elit eu semper efficitur, nisl mauris bibendum mauris, ac cursus
              magna eros non elit. Pellentesque sodales dolor vel sollicitudin
              tempus.
            </p>{" "}
          </div>
        }
      />
      <div className={styles.container}>
        <InvestingPlanSideNav activeHeadingId={1} activeSubheadingId={1.1} />
        <div>
          <TableOfContent links={links} />
          <div className={styles.contentContainer}>
            <div className={styles.content} id="current-situation">
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
            </div>
            {/* <div className={styles.content} id="emerygency-fund">
              <h1>Do you have an emergency fund?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div> */}
            <div className={styles.content} id="asset-owned">
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
            </div>
            <div className={styles.content} id="liabilities-owed">
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
            </div>
            <div className={styles.content}>
              <h1> Net Worth calculator – Personal Balance sheet:</h1>
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
              <PieChart
                data={{
                  labels: [
                    "Total Libailities",
                    "Total Assets",
                    "Total Networth",
                  ],
                  datasets: [
                    {
                      label: "",
                      data: [
                        totalLiabilities || 0,
                        totalAssets || 0,
                        netWorth || 0,
                      ],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
              <div
                style={{
                  marginTop: "20px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                }}
              >
                <NumberWithLabel
                  labelText={"As at Date"}
                  mainText={DateTime.now().toFormat("yyyy.MM.dd")}
                  tyle={{ borderRight: "1px solid lightgray" }}
                />
                <NumberWithLabel
                  labelText={"Total Assets"}
                  mainText={`$${totalAssets <= 0 ? "0" : totalAssets}`}
                  style={{ borderRight: "1px solid lightgray" }}
                />
                <NumberWithLabel
                  labelText={"Total Liabilities"}
                  mainText={`$${
                    totalLiabilities <= 0 ? "0" : totalLiabilities
                  }`}
                  mainTextStyle={{
                    color: "var(--primary-orange)",
                  }}
                  style={{
                    borderRight: "1px solid lightgray",
                    paddingLeft: "20px",
                  }}
                />
                <NumberWithLabel
                  labelText={"Net Worth"}
                  mainText={`$${netWorth <= 0 ? "0" : netWorth}`}
                  mainTextStyle={{
                    color: "var(--secondary-color)",
                  }}
                  style={{ paddingLeft: "20px" }}
                />
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
