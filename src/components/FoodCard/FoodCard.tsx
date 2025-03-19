import styles from "./FoodCard.module.css";
import { FoodContext } from "../providers/FoodContext";
import { useContext } from "react";

interface Props {
  img: string;
  meal: string;
  area: string;
  category: string;
}

const FoodCard = ({ img, meal, area, category }: Props) => {
  const { handleClick } = useContext(FoodContext);

  return (
    <div
      className={`card-sm bg-base-100 w-96 shadow-sm mb-8 rounded-md ${styles.card}`}
      onClick={handleClick}
    >
      <div className={`card-body bg-neutral-50 ${styles.cardBody}`}>
        <h2 className="card-title text-black">{meal}</h2>
        <p className="text-black">
          {area}, {category}
        </p>
      </div>
      <figure>
        <img className={styles.img} src={img} alt={"Photo of " + meal} />
      </figure>
    </div>
  );
};
export default FoodCard;
