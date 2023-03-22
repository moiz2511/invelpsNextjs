import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";
import { useRouter } from "next/router";
import CustomButton from "./Button";

function Layout({
  title,
  keywords,
  description,
  children,
  nextUrl,
  toggleSidebarOnPhone,
  phoneSidebarOpen,
}) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar
        toggleSidebarOnPhone={toggleSidebarOnPhone}
        phoneSidebarOpen={phoneSidebarOpen}
      />

      <div className={styles.container}>{children}</div>
      {nextUrl && (
        <div className={styles.buttonContainer}>
          <CustomButton
            style={{ marginRight: "20px" }}
            onClick={() => router.back()}
          >
            Prev
          </CustomButton>
          <CustomButton onClick={() => router.push(nextUrl)}>Next</CustomButton>
        </div>
      )}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Invelps | Investment help strategies",
  keywords:
    "investment invelps invelps Invelps investment money strategy growth",
  description: "Investment help strategies",
};
export default Layout;
