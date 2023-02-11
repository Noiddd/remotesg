import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import styles from "./styles/Home/home.module.css";
import JobFilter from "./Filter/JobFilter";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles.mainContainer}>
        <JobFilter />
      </div>
    </>
  );
}

export default App;
