import { createContext, ReactNode, useEffect, useState } from "react";

interface ContextProps {
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  searchData: FoodItem[];
  setSearchData: React.Dispatch<React.SetStateAction<FoodItem[]>>;
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
  // const [foodData, setFoodData] = useState<FoodItem[]>([]);

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
      value={{ searchVal, setSearchVal, searchData, setSearchData }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodContextProvider };
