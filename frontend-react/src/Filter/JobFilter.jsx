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
} from "@fortawesome/free-solid-svg-icons";
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
  ];

  return (
    <div className={styles.jobFilterContainer}>
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
