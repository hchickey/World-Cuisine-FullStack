using System.Collections.Generic;
using World_Cuisine.Models;

namespace World_Cuisine.Repositories
{
    public interface IRecipeRepository
    {
        List<Recipe> GetAll();
        Recipe GetRecipeById(int id);
        void AddRecipe(Recipe recipe);
        void UpdateRecipe(Recipe recipe);
    }
}