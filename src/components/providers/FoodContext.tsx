import { createContext, ReactNode, useEffect, useState, useRef } from "react";
import useDebounce from "../../hooks/useDebounce";

interface ContextProps {
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  searchData: FoodItem[];
  setSearchData: React.Dispatch<React.SetStateAction<FoodItem[]>>;
  ingredientList: string[];
  setIngredientList: React.Dispatch<React.SetStateAction<string[]>>;
  measuresList: string[];
  setMeasuresList: React.Dispatch<React.SetStateAction<string[]>>;
  handleClick: (event: React.MouseEvent) => void;
  heroImg: string | undefined;
  setHeroImg: React.Dispatch<React.SetStateAction<string>>;
  instructions: string | undefined;
  setInstructions: React.Dispatch<React.SetStateAction<string>>;
  heroTitle: string;
  setHeroTitle: React.Dispatch<React.SetStateAction<string>>;
  heroP: string;
  setHeroP: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
  reset: () => void;
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
  ingredients: string[];
  measures: string[];
  strInstructions: string;
}

interface ApiResponse {
  meals: FoodItem[];
}

const FoodContext = createContext<ContextProps | undefined>(undefined);

const FoodContextProvider = ({ children }: ProviderProps) => {
  const [error, setError] = useState<string | null>(null);
  const [searchVal, setSearchVal] = useState("");
  const [searchData, setSearchData] = useState<FoodItem[]>([]);
  const [heroImg, setHeroImg] = useState("./grill.png");
  const [heroTitle, setHeroTitle] = useState(
    "Hungry? Let's find your next recipe!"
  );
  const [heroP, setHeroP] = useState(
    "Use the search bar on the left to quickly discover new recipes and find the perfect dish to satisfy your cravings."
  );
  const [ingredientList, setIngredientList] = useState<string[]>([]);
  const [measuresList, setMeasuresList] = useState<string[]>([]);
  const [instructions, setInstructions] = useState("");

  const handleClick = (event: React.MouseEvent) => {
    const listItem = (event.target as HTMLElement).closest("li");
    if (listItem) {
      const h2Element = listItem.querySelector("h2");
      if (h2Element) {
        getClickedItemData(h2Element.innerText);
        console.log(ingredientList);
      }
    }
  };

  const inputRef = useRef(null);

  const debouncedSearchValue = useDebounce(searchVal, 400);

  const reset = () => {
    inputRef.current.focus();
    setHeroImg("./grill.png");
    setHeroTitle("Hungry? Let's find your next recipe!");
    setHeroP(
      "Use the search bar on the left to quickly discover new recipes and find the perfect dish to satisfy your cravings."
    );
    setSearchVal("");
    setIngredientList([]);
    setInstructions([]);
    setMeasuresList([]);
  };

  useEffect(() => {
    getData(debouncedSearchValue);
  }, [debouncedSearchValue]);

  async function getData(searchVal: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`;
    try {
      const response = await fetch(url);
      const data: ApiResponse = await response.json();
      console.log(data);
      setSearchData(data.meals || []);
    } catch (error: any) {
      setError("Could not retrieve data, please try again later.");
      console.log(error.message);
    }
  }

  const setStates = (clickedItem: FoodItem) => {
    setHeroImg(clickedItem.strMealThumb || ".food.png");
    setHeroTitle(clickedItem.strMeal);
    setInstructions(clickedItem.strInstructions);
    setHeroP(clickedItem.strArea + ", " + clickedItem.strCategory);
    setIngredientList(
      Object.keys(clickedItem)
        .filter((key) => key.startsWith("strIngredient") && clickedItem[key])
        .map((key) => clickedItem[key])
    );
    setMeasuresList(
      Object.keys(clickedItem)
        .filter((key) => key.startsWith("strMeasure") && clickedItem[key])
        .map((key) => clickedItem[key])
    );
  };

  async function getClickedItemData(searchVal: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`;
    try {
      const response = await fetch(url);
      const data: ApiResponse = await response.json();
      const clickedItem = data.meals[0];
      if (clickedItem) {
        setStates(clickedItem);
      }
    } catch (error: any) {
      setError("Could not retrieve data, please try again later.");
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
        error,
        setError,
        ingredientList,
        setIngredientList,
        measuresList,
        setMeasuresList,
        instructions,
        setInstructions,
        inputRef,
        reset,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodContextProvider };
