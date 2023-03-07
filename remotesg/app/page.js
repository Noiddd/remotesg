import FilterSalaryButton from "./(components)/(buttons)/filtersalarybutton/page";
import FilterTypeButton from "./(components)/(buttons)/filtertypebutton/page";
import LandingPage from "./(components)/landingpage/page";
import NumberOfJobs from "./(components)/numberofjobs/page";
import SearchBar from "./(components)/searchbar/page";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <div className="ml-32 mt-20">
        <div>
          <SearchBar />
        </div>
        <div className="flex justify-between w-5/12 mt-7">
          <div className="flex gap-5">
            <div>
              <FilterTypeButton />
            </div>
            <div>
              <FilterSalaryButton />
            </div>
          </div>

          <div className="relative right-0 top-3">
            <NumberOfJobs />
          </div>
        </div>
      </div>
    </main>
  );
}
