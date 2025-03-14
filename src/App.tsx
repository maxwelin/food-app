import "./App.css";
import Search from "./components/Search/Search";
import Hero from "./components/Hero/Hero";
import {
  FoodContext,
  FoodContextProvider,
} from "./components/providers/FoodContext";

function App() {
  return (
    <div className="bg-neutral-50 min-h-screen flex flex-row">
      <FoodContextProvider>
        <Search />
        <Hero />
      </FoodContextProvider>
    </div>
  );
}

export default App;
