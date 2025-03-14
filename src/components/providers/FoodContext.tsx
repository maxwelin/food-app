import { createContext, ReactNode, useEffect, useState } from "react";

interface ContextProps {
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  searchData: FoodItem[];
  setSearchData: React.Dispatch<React.SetStateAction<FoodItem[]>>;
  handleClick: (event: React.MouseEvent) => void;
  heroImg: string;
  setHeroImg: React.Dispatch<React.SetStateAction<string>>;
  heroTitle: string;
  setHeroTitle: React.Dispatch<React.SetStateAction<string>>;
  heroP: string;
  setHeroP: React.Dispatch<React.SetStateAction<string>>;
}

interface ProviderProps {
  children: ReactNode;
}

interface FoodItem {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
}

const FoodContext = createContext<ContextProps | undefined>(undefined);

const FoodContextProvider = ({ children }: ProviderProps) => {
  const [searchVal, setSearchVal] = useState("");
  const [searchData, setSearchData] = useState<FoodItem[]>([]);
  const [heroImg, setHeroImg] = useState("./food.png");
  const [heroTitle, setHeroTitle] = useState(
    "Hungry? Let's find your next recipe!"
  );
  const [heroP, setHeroP] = useState(
    "Use the search bar on the right to quickly discover new recipes and find the perfect dish to satisfy your cravings."
  );

  const handleClick = (event: React.MouseEvent) => {
    if (searchData) {
      const listItem = (event.target as HTMLElement).closest("li");
      const imgElement = listItem.querySelector("img");
      const h2Element = listItem.querySelector("h2");
      const pElement = listItem.querySelector("p");
      setHeroImg(imgElement.src);
      setHeroTitle(h2Element?.innerText);
      setHeroP(pElement.innerText);
    }
  };

  useEffect(() => {
    getData(searchVal);
  }, [searchVal]);

  async function getData(searchVal: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      setSearchData(data.meals || []);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <FoodContext.Provider
      value={{
        searchVal,
        setSearchVal,
        searchData,
        setSearchData,
        handleClick,
        heroImg,
        setHeroImg,
        heroTitle,
        setHeroTitle,
        heroP,
        setHeroP,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodContextProvider };
