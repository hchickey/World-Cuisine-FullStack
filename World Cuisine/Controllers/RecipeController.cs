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

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var recipe = _recipeRepo.GetRecipeById(id);
            if(recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
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

        [HttpPut("{id}")]
        public IActionResult Put(int id, Recipe recipe)
        {
            if(id != recipe.Id)
            {
                return BadRequest();
            }

            _recipeRepo.UpdateRecipe(recipe);
            return NoContent();
        }
    }
}
