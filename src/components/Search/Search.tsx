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
  const { searchVal, setSearchVal, searchData } = useContext(FoodContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const handleClick = () => {
    searchData.map((item: FoodItem) => console.log(item.strMeal));
  };

  const hasSearchData = searchData.length > 0;

  return (
    <>
      <input type="text" value={searchVal} onChange={handleChange} />
      <button onClick={handleClick}>hej</button>
      <ul>
        {hasSearchData ? (
          searchData.map((meal: FoodItem, index: number) => (
            <li key={index}>
              {meal.strMeal}
              <img src={meal.strMealThumb} alt={"Photo of " + meal.strMeal} />
            </li>
          ))
        ) : (
          <li>No meals found</li>
        )}
      </ul>
    </>
  );
};
export default Search;
