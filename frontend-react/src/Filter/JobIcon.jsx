import React from "react";
import styles from "../styles/JobFilter/jobfilter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobIcon = ({ icon, jobTitle }) => {
  return (
    <div className={styles.jobIconContainer}>
      <FontAwesomeIcon icon={icon} size="lg" className={styles.faIcon} />
      <div className={styles.jobTitle}>{jobTitle}</div>
    </div>
  );
};

export default JobIcon;
