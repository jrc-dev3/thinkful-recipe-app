import React from "react";

const RecipeEntry = ({ name, cuisine, photo, preparation, ingredients, deleteRecipe, index }) => {
  return (
    <tr id="list_entry">
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img style={{objectFit: "scale-down", width: "100%", height: "100%"}} src={photo} alt="Food" /></td>
      <td>{preparation}</td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
};


export default RecipeEntry