import React from "react";

import styles from "../styles/NavBar/navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <logo className={styles.logo}>RemoteSG</logo>
      <div className={styles.navLinks}>
        <div className={styles.getJobAlert}>Get job alerts</div>
        <div className={styles.postAJob}>Post a job</div>
      </div>
    </nav>
  );
};

export default NavBar;
