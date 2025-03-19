import styles from "./Instructions.module.css";
import { FoodContext } from "../providers/FoodContext";
import { useContext } from "react";

const Instructions = () => {
  const { instructions } = useContext(FoodContext);

  if (instructions && instructions.length > 0) {
    return (
      <div className={styles.container}>
        <h2 className={`text-black mt-4 ${styles.h2}`}>Instructions</h2>
        <ul
          className={`list-discspace-y-3 bg-gray-100 p-4 rounded-3xl mt-4 ${styles.ul}`}
        >
          <li className="text-xl text-gray-800">{instructions}</li>
        </ul>
      </div>
    );
  } else {
    return;
  }
};
export default Instructions;
