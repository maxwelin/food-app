import { useEffect, useState } from "react";
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
      className={`hero ml-20 mt-20 mr-20 rounded-2xl ${styles.hero}`}
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-overlay rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-left">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">{heroTitle}</h1>
          <p className="mb-5 text-xl">{heroP}</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
