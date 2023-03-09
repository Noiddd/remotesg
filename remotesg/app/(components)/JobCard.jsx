import React from "react";

export default function JobCard({ jobData }) {
  return (
    <div className="p-6 pt-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 h-72 flex flex-col justify-between">
      <div>
        <div className="">{jobData.fields.CompanyName}</div>
        <div className="mt-2 font-nunito text-xl text-primary">
          {jobData.fields.JobTitle}
        </div>
        <div className="mt-2">{jobData.fields.Salary}</div>
      </div>
      <div className="flex gap-5">
        <div className="bg-primary text-white font-bold py-1 px-3 rounded font-nunito text-sm">
          {jobData.fields.JobType}
        </div>
        <div className="bg-primary text-white font-bold py-1 px-3 rounded font-nunito text-sm">
          Engineer
        </div>
      </div>
    </div>
  );
}
