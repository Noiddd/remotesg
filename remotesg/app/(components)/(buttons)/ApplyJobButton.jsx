import Link from "next/link";
import React from "react";

export default function ApplyJobButton({ url }) {
  return (
    <Link
      href={`${url}`}
      className="bg-primary text-white font-bold py-3 px-5 rounded font-nunito"
    >
      Apply Job
    </Link>
  );
}
