import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import FacebookLogo from "../public/images/facebook.png";
import InstagramLogo from "../public/images/instagram.png";
import TwitterLogo from "../public/images/twitter.png";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        {/* <Image src={Logo} alt="invelps" /> */}
        <ul className={styles.footerTopList}>
          <Link href="/contact" className={styles.achorStyle}>
            <li>Contact</li>
          </Link>
          <a href="#services" className={styles.achorStyle}>
            <li>Terms of use</li>
          </a>
          <a href="#aboutus" className={styles.achorStyle}>
            <li>Privacy Policy</li>
          </a>
        </ul>
        {/* <ul className="footerTopList footerTopList-second">
          <li>Term Of Use</li>
          <li>Privacy Policy</li>
        </ul> */}
      </div>
      <div className={styles.footerBottom}>
        <Image src={Logo} alt="invelps" />
        <div className={styles.footerBottomContainer}>
          <ul className={styles.footerBottomList}>
            <li>
              <Image src={FacebookLogo} alt="facebook" />
            </li>
            <li>
              <Image src={InstagramLogo} alt="instagram" />
            </li>
            <li>
              <Image src={TwitterLogo} alt="twitter" />
            </li>
          </ul>
          <p style={{ color: "#fff" }}>Copyright @2022 All right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
