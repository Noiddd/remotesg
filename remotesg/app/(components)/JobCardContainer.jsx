import React from "react";

export default function JobCardContainer({ children, setJobDetails, jobData }) {
  const changeJobDetails = () => {
    setJobDetails(jobData);
  };

  return <div onClick={changeJobDetails}>{children}</div>;
}
