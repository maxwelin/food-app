import { FoodContext } from "../providers/FoodContext";
import { useContext } from "react";
import styles from "./IngredientList.module.css";

const IngredientList = () => {
  const { ingredientList, measuresList } = useContext(FoodContext);

  if (ingredientList && ingredientList.length > 0) {
    return (
      <div className={styles.listContainer}>
        <h2 className={`text-black mt-4 ${styles.h2}`}>Ingredients</h2>
        <ul
          className={`list-discspace-y-3 bg-gray-100 p-4 rounded-3xl mt-4 ${styles.ul}`}
        >
          {ingredientList.map((ingredient: string, index: number) => (
            <li key={index} className="text-xl text-gray-800">
              <strong>{measuresList[index]}</strong>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return;
  }
};
export default IngredientList;
