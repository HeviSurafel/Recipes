import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import CreateRecipe from "./Pages/CreateRecipe"
import {SavedRecipes} from "./Pages/SavedRecipes"
import Auth from "./Pages/auth"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
