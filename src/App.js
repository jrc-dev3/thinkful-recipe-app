import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = entry => {
    setRecipes([...recipes, entry])

  }
  
  const deleteRecipe = index => {
    setRecipes(recipes.filter((_,i) => index !== i ))
  }

  return (
    <div className="App">
      <header><h1 style={{fontFamily: "Playfair Display SC", fontSize: "64px", textAlign: "center"}}>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes}
        deleteRecipe={deleteRecipe}  />
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;
