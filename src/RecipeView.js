import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>
        <p>{recipe.name}</p>
      </td>
      <td>
        <p>{recipe.cuisine}</p>
      </td>
      <td>
        <img src={recipe.photo} alt="created recipe" />
      </td>
      <td>
        <p className="content_td">{recipe.ingredients}</p>
      </td>
      <td>
        <p className="content_td">{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
