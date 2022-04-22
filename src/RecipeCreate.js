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

    const formValid = () => {
      return name && cuisine && photo && ingredients && preparation
    }

    if(formValid()){

      const entry = {
        name,
        cuisine,
        photo,
        preparation,
        ingredients,
      };

      setFormData({...initialState})
      addRecipe(entry);

    }else{
      console.log('here')
      alert('Please fill in all entries.')
    }


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
                value={name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                onChange={handleChange}
                placeholder="cuisine"
                value={cuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                type="text"
                onChange={handleChange}
                placeholder="URL"
                value={photo}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                onChange={handleChange}
                placeholder="preparation"
                value={preparation}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                onChange={handleChange}
                placeholder="ingredients"
                value={ingredients}
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
