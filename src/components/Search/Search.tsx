import FoodCard from "../FoodCard";
import { FoodContext } from "../providers/FoodContext";
import { useContext } from "react";
import styles from "./Search.module.css";
import Searchbar from "./Searchbar";

interface FoodItem {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  ingredients: string[];
  measures: string[];
  instructions: string;
}

const Search = () => {
  const { searchData, error } = useContext(FoodContext);

  const hasSearchData = searchData.length > 0;

  return (
    <div
      className={`bg-neutral-50 flex flex-col items-center ${styles.wrapper}`}
    >
      <h2 className={`text-black ${styles.h2}`}>
        Let's find your next recipe!{" "}
      </h2>
      <Searchbar />
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
          <li className="text-black mt-4">
            We couldn't find any meals that match your search.
          </li>
        )}
        {error ? <p className="text-black mt-4">{error}</p> : <p></p>}
      </ul>
    </div>
  );
};
export default Search;
