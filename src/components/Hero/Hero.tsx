import styles from "./Hero.module.css";
import { FoodContext } from "../providers/FoodContext";
import { useContext } from "react";

const Hero = () => {
  const {
    heroImg = "/food.png",
    heroTitle = "Meal Name",
    heroP = "",
  } = useContext(FoodContext);

  return (
    <div
      className={`hero mt-20 ${styles.hero}`}
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">{heroTitle}</h1>
          <p className="mb-5 text-xl">{heroP}</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
