import "./App.css";
import NavBar from "./NavBar/NavBar";
import styles from "./styles/Home/home.module.css";
import SearchBar from "./SearchBar/SearchBar";
import FilterSalary from "./FilterJob/FilterSalary";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles.mainContainer}></div>
      <SearchBar />
      <FilterSalary />
      <div>Over 1,000 remote jobs in Singapore</div>
    </>
  );
}

export default App;
