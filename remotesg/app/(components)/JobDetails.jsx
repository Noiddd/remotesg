import React from "react";
import { useRouter } from "next/navigation";

export default function JobDetails({ jobDetails }) {
  const router = useRouter();
  const query = router.query;
  const jobTitle = query.jobTitle;

  return (
    <div>
      <div>{jobTitle}</div>
    </div>
  );
}
