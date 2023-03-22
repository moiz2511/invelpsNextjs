import InvestingPlanSideNav from "@/components/investingPlan/InvestingPlanSideNav";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";
import styles from "@/styles/BasicPage.module.css";
import modalStyles from "@/styles/InfoModal.module.css";
import TableOfContent from "@/components/TableOfContent";
import InfoModal from "@/components/InfoModal";
import FinancialGoalsCalculator from "@/components/investingPlan/FinancialGoalsCalculator";

const links = [
  {
    value: "Figure out what you want most",
    link: "#your-wants",
  },
  {
    value: "What are you investing for?",
    link: "#investing-for",
  },
];

function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const toggleSidebarOnPhone = () => {
    setDisplaySidebar(!displaySidebar);
  };
  return (
    <Layout
      nextUrl={"/investing-plan/financial-goals/prepare-balance-sheet"}
      toggleSidebarOnPhone={toggleSidebarOnPhone}
      phoneSidebarOpen={displaySidebar}
    >
      <PageHeader
        parentHeading="Investing plan"
        childHeading="Set your financial goals"
        setOpenModal={setOpenModal}
        showMoreInfo={true}
      />

      <InfoModal
        open={openModal}
        setOpen={setOpenModal}
        heading="Set your financial goals"
        content={
          <div className={styles}>
            <div className={styles.content}>
              <h1>What are you investing for?</h1>
              <p>
                Successful investing generally starts with what you&apos;re
                investing for, not what you&apos;re investing in. You want to
                move forward with your finances. Maybe you long for financial
                security, that your family will always be taken care of, that
                you can finally relax and enjoy your money. If you dig a little
                deeper into this vision, what specifically do you want to
                accomplish? Do you imagine owning your own home or living
                debt-free? Do you think about paying for your children&apos;s
                education; retiring earlier or affording yourself some comfort
                in retirement. These specific items are your savings goals.
                It&apos;s important to take the time to name them and describe
                them in as much detail as possible.
              </p>
            </div>
            <div className={styles.content} id="investing-for">
              <h1>Why goals matter?</h1>
              <p>
                Knowing your destination will help you map out the best route to
                get there. Especially for large or ambitious long-term goals, it
                will be helpful to break them down into steps that you will
                follow to reach your goal. Research has found that having
                specific goals in mind can help improve your odds of success
                versus a vague commitment. Identifying your savings goals can
                help you:
              </p>
              <ul className={modalStyles.list}>
                {/* --- */}
                <li>
                  <b>Choose an appropriate investment mix:</b> For some goals,
                  such as ones that are many years away, you might be better
                  suited with an aggressive asset allocation that provides the
                  potential for higher returns but comes with higher risk. For
                  others, such as nearer-term goals, you might need a safer
                  investment mix even if it means lower potential returns.
                  (Learn more about figuring out your risk tolerance and asset
                  allocation.)
                </li>
                {/* -- */}
                <li>
                  <b>Identify the appropriate account types:</b> Saving and
                  investing in tax-advantaged accounts can provide powerful
                  benefits over time. But you need to choose an account type
                  matched to your goal to make the most of the strategy and
                  avoid potential penalties
                </li>
                {/* --- */}
                <li>
                  <b>Fine-tune your contribution amounts:</b> Planning out your
                  goals can help you figure out how much to contribute to each
                  goal—whether you&apos;re crunching the numbers on your own or
                  working through them with a financial professional.
                </li>
                <li>
                  <b>Measure your progress and adjust as needed:</b> With an
                  end-goal and plan in mind, you can keep regular tabs on your
                  progress and adjust quickly if you start to get off track.
                </li>
              </ul>
            </div>
            <div className={styles.content}>
              <p>
                Finally, identifying your goals can give you a sense of purpose
                for all the hard work you put into your finances, and a feeling
                of accomplishment when you reach those mile markers you&apos;ve
                set for yourself. After all, you can&apos;t cross the finish
                line if there is no finish line. When you have a clear goal,
                you&apos;ll have a way of knowing when you&apos;ve arrived.
              </p>
            </div>
            <div className={styles.content}>
              <h1>What you need to identify?</h1>
              <p>
                As your vision of your future starts to come into focus, there
                are a few details you&apos;ll want to try to pin down for each
                one
              </p>
              <p>
                <b>What it is:</b> Defining your goals is a good way to express
                your values and to dream big.
              </p>
              <p>
                <b>When it is:</b> The time frame in which you want to achieve
                your goal also called your time horizon. It&apos;s important
                because it informs how much risk to consider when building your
                investment mix for that goal, and determines how long you have
                to build up your savings
              </p>
              <p>
                <b>How much you&apos;ll need:</b> Putting a price tag on each
                goal is a crucial detail that can help you determine the right
                savings or investment rates, and help you track your progress to
                the finish line
              </p>
            </div>
            <div className={styles.content}>
              <p>
                Consider writing your goals down so you have a tangible reminder
                of what you&apos;re working toward. And know that it&apos;s OK
                at this stage to name some goals that feel more like dreams than
                sure things. After all, figuring out your goals is partly about
                defining your financial aspirations, and you&apos;ll be able to
                revise your list as you go along
              </p>
            </div>
            <div className={styles.content}>
              <h1>How to avoid getting stuck</h1>
              <p>
                For some people, making long-term plans is an exciting way to
                think big and build momentum. But for others, it can be
                paralyzing to feel like you need to map out the rest of your
                life milestones with any certainty
              </p>
              <p>
                Here are some common roadblocks you might run into as you try to
                identify your goals, and how to consider handling them
              </p>
              <ul className={modalStyles.list}>
                <li>
                  <b>You&apos;re worried your goals might change.</b> In fact,
                  there&apos;s a good chance they will, and that&apos;s OK. Do
                  your best to think through your plans, but know that whatever
                  you come up with will still only be a draft.
                </li>
                <li>
                  <b>You don&apos;t know how much you need. </b>Picking price
                  tags for your goals can be intimidating. Calculators and rules
                  of thumb might help you start to narrow down your estimate,
                  but many people find it helpful to work through the numbers
                  with a financial professional. (Learn more about how much to
                  save for retirement and college goals.)
                </li>
                <li>
                  <b>Your future is a blank slate. </b> Maybe you truly
                  aren&apos;t in the right place in life to choose concrete
                  savings goals (beyond the 2 essential ones of retirement and
                  emergency savings). In that case, you can consider adopting a
                  catchall goal for now, such as &quot;building wealth,&quot;
                  until more definite plans start to emerge on your horizon.
                </li>
              </ul>
            </div>
            <div className={styles.content}>
              <p>
                Don&apos;t let perfection be the enemy of financial progress.
                And know that whatever your dream board ends up looking like,
                we&apos;re here to help.
              </p>
            </div>
          </div>
        }
      />
      <div className={styles.container}>
        <InvestingPlanSideNav
          activeHeadingId={1}
          activeSubheadingId={1.1}
          sidebarStyle={{
            left: displaySidebar ? "0px" : "-1000px",
          }}
        />

        <div>
          <TableOfContent links={links} />
          <div className={styles.contentContainer}>
            <div className={styles.content} id="your-wants">
              <h1>Figure out what you want most</h1>
              <p>
                Think broadly at first: start with your goals. Investing is a
                path to use to accomplish something, to achieve a goal. It is
                likely that you know what you want to achieve, but the hardest
                part is often taking the first step.
              </p>
            </div>
            <div className={styles.content} id="investing-for">
              <h1>What are you investing for?</h1>
              <p>
                Successful investing generally starts with what you&apos;re
                investing for, not what you&apos;re investing in. You want to
                move forward with your finances. Maybe you long for financial
                security, that your family will always be taken care of, that
                you can finally relax and enjoy your money. If you dig a little
                deeper into this vision, what specifically do you want to
                accomplish? Do you imagine owning your own home or living
                debt-free? Do you think about paying for your children&apos;s
                education; retiring earlier or affording yourself some comfort
                in retirement. These specific items are your savings goals.
                It&apos;s important to take the time to name them and describe
                them in as much detail as possible.
              </p>
            </div>
            <div className={styles.content} id="investing-for">
              <h1>Set your investing goals:</h1>
              <p>Please answer all the below questions:</p>
              <FinancialGoalsCalculator />
              <p>
                Whether it&apos;s a short-term or long-term goal, know that your
                goal is the destination. Your current net worth is the starting
                point. Identify your income, cash inflows and outflows and
                you&apos;ll know how much money you have left - that&apos;s
                money you can save. A close look at your spending can also help
                you identify areas where you could spend less if you want to
                spend more money on your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
