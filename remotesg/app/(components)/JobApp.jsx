"use client";

import React, { useEffect, useState } from "react";
import FilterSalaryButton from "./(buttons)/FilterSalaryButton";
import FilterTypeButton from "./(buttons)/FilterTypeButton";
import JobCard from "./JobCard";
import JobCardContainer from "./JobCardContainer";
import JobDetails from "./JobDetails";
import NumberOfJobs from "./NumberOfJobs";
import SearchBar from "./SearchBar";

export default function JobApp({ data }) {
  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    setJobDetails(data.records[0]);
  }, []);

  return (
    <div className="mx-32 mt-20 max-w-content grid grid-cols-2 gap-12">
      <div className="w-full">
        <div className="w-full">
          <SearchBar />
        </div>
        <div className="relative flex items-center w-full mt-4 justify-between">
          <div className="flex gap-5">
            <div className="">
              <FilterTypeButton />
            </div>
            <div className="">
              <FilterSalaryButton />
            </div>
          </div>
          <div className="absolute right-0">
            <NumberOfJobs />
          </div>
        </div>
        <div className="mt-7 w-full grid xl:grid-cols-2 gap-4">
          {data.records.map((jobData) => {
            return (
              //   <JobCardContainer
              //     jobData={jobData}
              //     setJobDetails={setJobDetails}
              //     key={jobData.id}
              //   >
              <JobCard jobData={jobData} key={jobData.id} />
              // </JobCardContainer>
            );
          })}
        </div>
      </div>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
        <JobDetails jobDetails={jobDetails} />
      </div>
    </div>
  );
}
