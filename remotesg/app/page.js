import FilterSalaryButton from "./(components)/(buttons)/filtersalarybutton/page";
import FilterTypeButton from "./(components)/(buttons)/filtertypebutton/page";
import LandingPage from "./(components)/landingpage/page";
import SearchBar from "./(components)/searchbar/page";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <div className="mt-20 ml-32 ">
        <SearchBar />
      </div>
      <div className="mt-7 ml-32 flex gap-5">
        <div>
          <FilterTypeButton />
        </div>
        <div>
          <FilterSalaryButton />
        </div>
      </div>
    </main>
  );
}
