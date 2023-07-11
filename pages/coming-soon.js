import React, { useState } from "react";
import styles from "@/styles/ComingSoon.module.css";
import { useRouter } from "next/router";
import InProgressImage from "../public/images/undraw_building_blocks_re_5ahy.svg";
import Image from "next/image";
import Layout from "@/components/Layout";

function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.container1}>
          <h1>Coming Soon</h1>
          <h3>WE ARE WORKING HARD TO GIVE YOU A BETTER EXPERIENCE</h3>
          <p>
            We are working on it and the feature may go live very soon.
            <br /> We promise it will be worth the wait.
          </p>
          <div className={styles.emailContainer}>
            <h2>Get Notified When We Go Live</h2>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button>Notify Me</button>
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <button onClick={() => router.back()}>Back</button>
          <Image src={InProgressImage} alt="image" />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
