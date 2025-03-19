import { FoodContext } from "../providers/FoodContext";
import { useContext } from "react";
import styles from "./Search.module.css";

const Searchbar = () => {
  const { searchVal, setSearchVal, inputRef } = useContext(FoodContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  return (
    <label
      className={`input bg-white border-neutral-400 mb-4 mt-16 ${styles.searchInput}`}
    >
      <svg
        className="h-[1em] opacity-50 text-black"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        ref={inputRef}
        type="search"
        required
        placeholder="Search"
        value={searchVal}
        onChange={handleChange}
        className="bg-white text-black border-none"
      />
    </label>
  );
};
export default Searchbar;
