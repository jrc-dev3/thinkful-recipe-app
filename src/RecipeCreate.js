import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialState });
  const { name, cuisine, photo, ingredients, preparation } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const entry = {
      name,
      cuisine,
      photo,
      preparation,
      ingredients,
    };


    addRecipe(entry);
    setFormData({...initialState})

  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="name"
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                onChange={handleChange}
                placeholder="cuisine"
              />
            </td>
            <td>
              <input
                name="photo"
                type="text"
                onChange={handleChange}
                placeholder="URL"
              />
            </td>
            <td>
              <textarea
                name="preparation"
                onChange={handleChange}
                placeholder="preparation"
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                onChange={handleChange}
                placeholder="ingredients"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
