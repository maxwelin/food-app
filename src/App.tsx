import "./App.css";
import Search from "./components/Search/Search";
import Hero from "./components/Hero/Hero";
import { FoodContextProvider } from "./components/providers/FoodContext";
import IngredientList from "./components/IngredientList/IngredientList";
import Instructions from "./components/Instructions/Instructions";

function App() {
  return (
    <div className="min-h-screen flex flex-row">
      <FoodContextProvider>
        <Search />
        <div style={{ width: "100%" }}>
          <Hero />
          <div style={{ display: "flex" }}>
            <IngredientList />
            <Instructions />
          </div>
        </div>
      </FoodContextProvider>
    </div>
  );
}

export default App;
