import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // reate recipe with passed in hook
    createRecipe({ formData });

    // reset form data
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label input="name">
                <input
                  placeholder="Name"
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label input="cuisine">
                <input
                  placeholder="Cuisine"
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label input="photo">
                <input
                  placeholder="URL"
                  id="photo"
                  name="photo"
                  type="url"
                  onChange={handleChange}
                  value={formData.photo}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label textarea="ingredients">
                <textarea
                  placeholder="Ingredients"
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label textarea="preparation">
                <textarea
                  placeholder="Preparation"
                  id="preparation"
                  type="text"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  required={true}
                />
              </label>
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
