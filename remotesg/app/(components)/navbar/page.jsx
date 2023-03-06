import GetJobAlertButton from "@/app/(components)/(buttons)/getjobalertbutton/page";
import PostAJobButton from "@/app/(components)/(buttons)/postajobbutton/page";
import ResourcesButton from "@/app/(components)/(buttons)/resourcesbutton/page";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex py-10 pl-24 pr-28 items-center justify-between">
      <div>
        <Link
          href="/"
          className="text-primary text-3xl m-5 font-nunito font-bold"
        >
          RemoteSG
        </Link>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <ResourcesButton />
          </li>
          <li>
            <GetJobAlertButton />
          </li>
          <li>
            <PostAJobButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
