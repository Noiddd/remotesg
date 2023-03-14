import Link from "next/link";
import React from "react";

export default function JobCard({ jobData }) {
  return (
    <div className="p-6 pt-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 h-72 flex flex-col justify-between cursor-pointer">
      <div>
        <div className="font-nunito text-xl xl:text-lg text-primary">
          {jobData.fields.JobTitle}
        </div>
        <div className="xl:text-sm mt-2">{jobData.fields.CompanyName}</div>
        <div className="mt-2 xl:text-sm">{jobData.fields.Salary}</div>
      </div>
      <div className="flex gap-5 justify-start items-baseline">
        <div className="bg-primary text-white font-bold py-2 px-4 rounded font-nunito text-sm xl:text-xs">
          {jobData.fields.JobType}
        </div>
        <div className="bg-secondary text-white font-bold py-2 px-4 rounded font-nunito text-sm xl:text-xs">
          Engineer
        </div>
        <div className="text-xs">{jobData.fields.PostedDaysAgo}</div>
      </div>
    </div>
  );
}
