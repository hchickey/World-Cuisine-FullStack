using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using World_Cuisine.Models;
using World_Cuisine.Repositories;

namespace World_Cuisine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeRepository _recipeRepo;
        public RecipeController(IRecipeRepository recipeRepo)
        {
            _recipeRepo = recipeRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<Recipe> recipes = _recipeRepo.GetAll();
            return Ok(recipes);
        }

        [HttpPost]
        public IActionResult Recipe(Recipe recipe)
        {

            if(string.IsNullOrWhiteSpace(recipe.ImageUrl))
            {
                recipe.ImageUrl = null;
            }

            _recipeRepo.AddRecipe(recipe);

            return NoContent();
        }
    }
}
