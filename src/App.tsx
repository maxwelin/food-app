import "./App.css";
import Search from "./components/Search/Search";
import {
  FoodContext,
  FoodContextProvider,
} from "./components/providers/FoodContext";

function App() {
  return (
    <>
      <FoodContextProvider>
        <Search />
      </FoodContextProvider>
    </>
  );
}

export default App;
