import "./App.css";
import Search from "./components/Search/Search";
import Hero from "./components/Hero/Hero";
import { FoodContextProvider } from "./components/providers/FoodContext";
import IngredientList from "./components/IngredientList/IngredientList";

function App() {
  return (
    <div className="bg-neutral-50 min-h-screen flex flex-row">
      <FoodContextProvider>
        <Search />
        <div style={{ width: "100%" }}>
          <Hero />
          <IngredientList />
        </div>
      </FoodContextProvider>
    </div>
  );
}

export default App;
