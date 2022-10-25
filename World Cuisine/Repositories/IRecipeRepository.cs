using System.Collections.Generic;
using World_Cuisine.Models;

namespace World_Cuisine.Repositories
{
    public interface IRecipeRepository
    {
        List<Recipe> GetAll();
        void AddRecipe(Recipe recipe);
    }
}