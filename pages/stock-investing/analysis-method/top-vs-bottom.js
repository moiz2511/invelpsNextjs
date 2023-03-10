import StockInvestingSideNav from "@/components/stockInvesting/InvestingPlanSideNav";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import styles from "@/styles/BasicPage.module.css";
import TableOfContent from "@/components/TableOfContent";
import InfoModal from "@/components/InfoModal";
import InvestingMethodAnalysisSideNav from "@/components/stockInvesting/analysisMethod/InvestingMethodAnalysisSideNav";

const links = [
  {
    value: "Setting your sights on your financial goals",
    link: "#financial-goals",
  },
  {
    value: "Why should you define goals?",
    link: "#define-goals",
  },
  {
    value: "What do you want to achieve?",
    link: "#achieve",
  },
  {
    value: "What are your milestones?",
    link: "#milestones",
  },
];

function Page() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Layout nextUrl={"/stock-investing/analysis-method/choose-your-approach"}>
      <PageHeader
        parentHeading="Stock Active Investing"
        childHeading="Top Up vs Bottom Up"
        setOpenModal={setOpenModal}
        showMoreInfo={true}
      />

      <InfoModal
        open={openModal}
        setOpen={setOpenModal}
        heading="Top Up vs Bottom Up"
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
        <InvestingMethodAnalysisSideNav
          activeHeadingId={1}
          activeSubheadingId={1.1}
        />
        <div>
          <TableOfContent links={links} />
          <div className={styles.contentContainer}>
            <div className={styles.content} id="financial-goals">
              <h1>Setting your sights on your financial goals</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
            <div className={styles.content} id="define-goals">
              <h1>Why should you define goals?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
            <div className={styles.content} id="achieve">
              <h1>What do you want to achieve?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
            <div className={styles.content} id="milestones">
              <h1>What are your milestones?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultrices id mi a placerat. In efficitur pulvinar justo
                vitae luctus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
