import StockInvestingSideNav from "@/components/stockInvesting/InvestingPlanSideNav";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import styles from "@/styles/BasicPage.module.css";
import TableOfContent from "@/components/TableOfContent";
import InfoModal from "@/components/InfoModal";
import InvestingPlanSideNav from "@/components/investingPlan/InvestingPlanSideNav";
import CustomTable from "@/components/Table";
import ManageInvestmentCard from "@/components/investingPlan/risk-and-return/ManageInvestmentCard";
import Image1 from "../../../public/images/andrew-neel-cckf4TsHAuw-unsplash.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {
    value: "Active vs Passive Investing",
    link: "#active-vs-passive",
  },
  {
    value: "How do you want to manage your portfolio?",
    link: "#manage",
  },
];

function Page() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const toggleSidebarOnPhone = () => {
    setDisplaySidebar(!displaySidebar);
  };

  return (
    <Layout
      nextUrl={"/investing-plan/investment-strategies/analysis-method-overview"}
      toggleSidebarOnPhone={toggleSidebarOnPhone}
      phoneSidebarOpen={displaySidebar}
    >
      <PageHeader
        parentHeading={
          <Link href="/investing-plan/introduction">Investing plan</Link>
        }
        childHeading="Active vs Passive Investing"
        setOpenModal={setOpenModal}
        showMoreInfo={true}
      />

      <InfoModal
        open={openModal}
        setOpen={setOpenModal}
        heading="Stock Investing"
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
        <InvestingPlanSideNav
          activeHeadingId={5}
          activeSubheadingId={5.3}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          <TableOfContent links={links} />
          <div className={styles.contentContainer}>
            <div className={styles.content} id="active-vs-passive">
              <h1>Active vs Passive investing</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
            <div className={styles.content}>
              <CustomTable
                columns={["Type", "Active Approach", "Passive Approach"]}
                rows={[
                  {
                    type: "Goals",
                    active: "Beat market performance",
                    passive: "Replicate market performance",
                  },
                  {
                    type: "Preferred instrument",
                    active: "Stock",
                    passive: "ETF (Tracker)",
                  },
                  {
                    type: "Portfolio",
                    active: "Focused",
                    passive: "Highly diversified",
                  },
                  {
                    type: "Analysis Method",
                    active: (
                      <ul>
                        Stock picking
                        <li style={{ marginLeft: "20px" }}>
                          Fundamental analysis (top-down)
                        </li>
                        <li style={{ marginLeft: "20px" }}>
                          Fundamental analysis (bottom-up)
                        </li>
                        <li style={{ marginLeft: "20px" }}>
                          Technical analysis
                        </li>
                      </ul>
                    ),
                    passive: "Buy and hold",
                  },
                  {
                    type: "Philosophy",
                    active: "Market inefficiency",
                    passive: "Market efficiency",
                  },
                  {
                    type: "Transaction frequency",
                    active: "High frequency",
                    passive: "Low frequency",
                  },
                  {
                    type: "Transaction costs",
                    active: "High",
                    passive: "Low",
                  },
                  {
                    type: "Return / Risk",
                    active: "Potentially high return due to high risk",
                    passive: "Medium return due to medium risk",
                  },
                  {
                    type: "Risk type",
                    active: (
                      <ul>
                        <li style={{ marginLeft: "20px" }}>
                          Idiosyncratic risk
                        </li>
                        <li style={{ marginLeft: "20px" }}>Market risk</li>
                      </ul>
                    ),
                    passive: (
                      <ul>
                        <li style={{ marginLeft: "20px" }}>Market risk</li>
                      </ul>
                    ),
                  },
                  {
                    type: "Transaction frequency",
                    active: "High frequency",
                    passive: "Low frequency",
                  },
                  {
                    type: "Transaction costs",
                    active: "High",
                    passive: "Low",
                  },
                  {
                    type: "Timing",
                    active: "Take advantage of price movements (volatility)",
                    passive: "Ignore price movements (volatility)",
                  },
                  {
                    type: "Required knowledge",
                    active: "Important",
                    passive: "Low",
                  },
                  {
                    type: "Duration of analysis",
                    active: "High",
                    passive: "Low",
                  },
                ]}
              />
            </div>
            <div className={styles.content} id="manage">
              <h1>How do you want to manage your portfolio?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ManageInvestmentCard
                img={Image1}
                t1={"You  want a return above market performance"}
                t2={"You are willing to learn"}
                t3={"You regularly spend time on your portfolio"}
                t4={"You do all your own research and analysis"}
                btnTxt={"Select your stock"}
                onClick={() => {
                  router.push(
                    "/investing-plan/investment-strategies/analysis-method"
                  );
                }}
              />
              <ManageInvestmentCard
                img={Image1}
                t1={"You are fine to replicate market performance"}
                t2={"You want to reduce risk with high diversification"}
                t3={"You do not have time for research"}
                t4={"You may not have a lot of experience or interest"}
                btnTxt={"Select your funds"}
                onClick={() => {
                  router.push("/coming-soon");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
