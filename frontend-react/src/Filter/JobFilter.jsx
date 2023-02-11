import React, { useEffect, useState } from "react";
import styles from "../styles/JobFilter/jobfilter.module.css";
import {
  faHandshakeAngle,
  faComputer,
  faPalette,
  faPhotoFilm,
  faBullhorn,
  faPenClip,
  faUserGraduate,
  faCoins,
  faCalculator,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobIcon from "./JobIcon";

const JobFilter = () => {
  const iconList = [
    { icon: faHandshakeAngle, jobTitle: "Sales" },
    { icon: faComputer, jobTitle: "Engineer" },
    { icon: faPalette, jobTitle: "Design" },
    { icon: faPhotoFilm, jobTitle: "Media" },
    { icon: faBullhorn, jobTitle: "Marketing" },
    { icon: faPenClip, jobTitle: "Admin" },
    { icon: faCoins, jobTitle: "Finance" },
    { icon: faUserGraduate, jobTitle: "Education" },
    { icon: faCalculator, jobTitle: "Accounting" },
  ];

  return (
    <div className={styles.jobFilterContainer}>
      <div className={styles.jobIconContainer}>
        <FontAwesomeIcon
          icon={faSuitcase}
          size="lg"
          className={styles.faIcon}
        />
        <div className={styles.jobTitle}>All jobs</div>
      </div>
      <div className={styles.filterSeperate}></div>
      {iconList.map((icon) => {
        return (
          <JobIcon
            icon={icon.icon}
            jobTitle={icon.jobTitle}
            className={styles.jobIconContainer}
          />
        );
      })}
    </div>
  );
};

export default JobFilter;
