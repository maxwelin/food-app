import FoodCard from "../FoodCard";
import { FoodContext } from "../providers/FoodContext";
import styles from "./Search.module.css";
import { useContext } from "react";

interface FoodItem {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
}

const Search = () => {
  const { searchVal, setSearchVal, searchData, handleClick } =
    useContext(FoodContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const hasSearchData = searchData.length > 0;

  return (
    <div
      className={`bg-neutral-50 flex flex-col items-center ${styles.wrapper}`}
    >
      <h2 className={`text-black ${styles.h2}`}>
        Let's find your next recipe!{" "}
      </h2>
      <label
        className={`input bg-neutral-50 border-neutral-400 mb-8 mt-16 ${styles.searchInput}`}
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
          type="search"
          required
          placeholder="Search"
          value={searchVal}
          onChange={handleChange}
          className="bg-neutral-50 text-black border-none"
        />
      </label>
      <ul>
        {hasSearchData ? (
          searchData.map((meal: FoodItem, index: number) => (
            <li key={index}>
              <FoodCard
                img={meal.strMealThumb}
                meal={meal.strMeal}
                category={meal.strCategory}
                area={meal.strArea}
              />
            </li>
          ))
        ) : (
          <li className="text-black mt-4">No meals found</li>
        )}
      </ul>
    </div>
  );
};
export default Search;
