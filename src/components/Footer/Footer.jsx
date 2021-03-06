import React from "react";

import styles from "./Footer.module.css";

const Footer = ({ info: { data } }) => {
  //console.log(data);
  if (!data) {
    return "Loading...";
  }

  return (
    <div className={styles.footer}>
      <div className={styles.date}>
        <p>
          <i className="far fa-copyright"></i> All Rights Reserved |{" "}
          <a
            href="https://imagezero.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            ImageZerO
          </a>{" "}
          @2020 | Powered by :{" "}
          <a
            href="https://hpb.health.gov.lk/en/api-documentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            hpb.health.gov.lk
          </a>{" "}
        </p>
      </div>
    </div>
  );
};
export default Footer;
