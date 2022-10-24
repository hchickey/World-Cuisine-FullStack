using Microsoft.Extensions.Configuration;
using World_Cuisine.Models;
using System;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace World_Cuisine.Repositories
{
    public class RecipeRepository : BaseRepository, IRecipeRepository
    {
        public RecipeRepository(IConfiguration configuration) : base(configuration) { }

        public List<Recipe> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                SELECT r.Id AS RecipeId, r.Name, r.Description, r.ImageUrl, r.UserId,
                                       r.Ingredient, r.Instruction, u.FirstName, u.LastName
                                FROM Recipe r
                                LEFT JOIN User u ON u.Id = r.UserId";

                    var recipes = new List<Recipe>();

                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Recipe recipe = new Recipe()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("RecipeId")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Description = reader.GetString(reader.GetOrdinal("Description")),
                            Ingredient = reader.GetString(reader.GetOrdinal("Ingredient")),
                            Instruction = reader.GetString(reader.GetOrdinal("Instruction")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            User = new User()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName"))
                            }
                        };

                        if (!reader.IsDBNull(reader.GetOrdinal("ImageUrl")))
                        {
                            recipe.ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl"));
                        }

                        recipes.Add(recipe);
                    }
                    return recipes;
                }
            }
        }
    }
}
