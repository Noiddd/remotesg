import React from "react";
import ApplyJobButton from "./(buttons)/ApplyJobButton";

export default function JobDetails({ jobDetails }) {
  const JobDescription = jobDetails?.fields?.JobDescription;

  const keyWords = [
    "Roles & Responsibilities",
    "Responsibilities",
    "Role Requirements",
    "Preferred Requirements",
    "Benefits",
    "Job Duties:",
  ];

  return (
    <div>
      <div className="p-6 mt-5">
        <div className="font-nunito text-xl xl:text-2xl text-primary">
          {jobDetails?.fields?.JobTitle}
        </div>
        <div className="text-lg xl:text-xl text-primary mt-2">
          {jobDetails?.fields?.CompanyName}
        </div>
        <div className="mt-2">{jobDetails?.fields?.Salary}</div>
        <div className="mt-7">
          <ApplyJobButton url={jobDetails?.fields?.Link} />
        </div>
        <div className="mt-5">{jobDetails?.fields?.JobDescription}</div>
      </div>
    </div>
  );
}
