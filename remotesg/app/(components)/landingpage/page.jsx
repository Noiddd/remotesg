import React from "react";
import PostAJobButton from "../(buttons)/postajobbutton/page";
import ViewAllJobsButton from "../(buttons)/viewalljobsbutton/page";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-primary text-7xl font-nunito font-bold mb-4">
          Remote Jobs in
        </h1>
        <h1 className="text-primary text-7xl font-nunito font-bold mb-4">
          Singapore
        </h1>
        <h2 className="text-2xl">Work in your boxers</h2>
      </div>
      <div className="flex justify-center items-center mt-14 gap-5">
        <PostAJobButton />
        <ViewAllJobsButton />
      </div>
    </div>
  );
}
