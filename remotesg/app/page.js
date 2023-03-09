import FilterSalaryButton from "./(components)/(buttons)/FilterSalaryButton";
import FilterTypeButton from "./(components)/(buttons)/FilterTypeButton";
import JobCard from "./(components)/JobCard";
import JobDetails from "./(components)/JobDetails";
import LandingPage from "./(components)/LandingPage";
import NumberOfJobs from "./(components)/NumberOfJobs";
import SearchBar from "./(components)/SearchBar";

export default async function Home() {
  const API_KEY = process.env.API_KEY;
  const baseId = "appXurtrhmRuY40SF";
  const tableId = "tbli0nSPDXsV60hOl";

  const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  const data = await res.json();

  console.log(data.records);

  return (
    <main>
      <LandingPage />
      <div className="mx-32 mt-20 max-w-content grid grid-cols-2 gap-32">
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
          <div className="mt-7 w-full grid 2xl:grid-cols-2 gap-10">
            {data.records.map((jobData) => {
              return <JobCard jobData={jobData} />;
            })}
          </div>
        </div>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
          <JobDetails />
        </div>
      </div>
    </main>
  );
}
