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
      nextUrl={""}
      toggleSidebarOnPhone={toggleSidebarOnPhone}
      phoneSidebarOpen={displaySidebar}
    >
      <PageHeader
        parentHeading={
          <Link href="/investing-plan/introduction">
            Active vs Passive Approach
          </Link>
        }
        childHeading="Analysis Method"
        setOpenModal={setOpenModal}
        showMoreInfo={false}
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
          activeHeadingId={6}
          activeSubheadingId={6.1}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />
        <div>
          {/* <TableOfContent links={links} /> */}
          <div className={styles.contentContainer}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ManageInvestmentCard
                style={{ width: "400px" }}
                img={Image1}
                t1={
                  "From macroeconomic  environment and cycle to company specific."
                }
                t2={
                  "Focus on exploiting opportunities that follow market cycles."
                }
                t3={
                  "Identify the big picture and all of its components and understand how big-picture trends are affecting the entire industry."
                }
                t4={
                  "Start with the broader economy, analyzes the macroeconomic factors, and targets specific industries that perform well against the economic backdrop."
                }
                btnTxt={"Top down analysis method"}
                onClick={() => {
                  router.push(
                    "/investing-plan/investment-strategies/analysis-method-overview"
                  );
                }}
              />
              <ManageInvestmentCard
                style={{ width: "400px" }}
                img={Image1}
                t1={"From company specific variables and then expand outward."}
                t2={
                  "Identify profitable opportunities through company’s attributes and its valuations in comparison to the market."
                }
                t3={
                  "Begins its research at the company level but does not stop there."
                }
                t4={
                  "Looks at the fundamental and qualitative metrics of multiple companies and picks the company with the best prospects for the future—the more microeconomic factors."
                }
                btnTxt={"Bottom up analysis method"}
                onClick={() => {
                  router.push(
                    "/investing-plan/investment-strategies/analysis-method-overview-bottomup"
                  );
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
