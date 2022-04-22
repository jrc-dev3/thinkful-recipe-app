import React from "react";
import RecipeEntry from './RecipeEntry'

function RecipeList({ recipes, deleteRecipe }) {

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Preparation</th>
            <th>Ingredients</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="list_body">
          {recipes.map((props, index) => (
            <RecipeEntry
              key={index}
              {...props}
              deleteRecipe={deleteRecipe}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
