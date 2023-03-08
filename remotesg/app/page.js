import FilterSalaryButton from "./(components)/(buttons)/FilterSalaryButton";
import FilterTypeButton from "./(components)/(buttons)/FilterTypeButton";
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

  // var Airtable = require("airtable");
  // var base = new Airtable({ apiKey: `${API_KEY}` }).base("appXurtrhmRuY40SF");

  // base("JobStreet")
  //   .select({
  //     // Selecting the first 3 records in Grid view:
  //     maxRecords: 100,
  //     view: "Grid view",
  //   })
  //   .eachPage(
  //     function page(records, fetchNextPage) {
  //       // This function (`page`) will get called for each page of records.
  //       let data = [];

  //       records.forEach(function (record) {
  //         data.push({
  //           jobTitle: record.get("Job Title"),
  //           companyName: record.get("Company Name"),
  //         });
  //       });

  //       // To fetch the next page of records, call `fetchNextPage`.
  //       // If there are more records, `page` will get called again.
  //       // If there are no more records, `done` will get called.
  //       fetchNextPage();
  //     },
  //     function done(err) {
  //       if (err) {
  //         console.error(err);
  //         return;
  //       }
  //     }
  //   );

  return (
    <main>
      <LandingPage />
      <div className="ml-32 mt-20">
        <div className="w-5/12">
          <SearchBar />
        </div>
        <div className="relative flex items-center w-5/12 mt-7 justify-between">
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
      </div>
    </main>
  );
}
