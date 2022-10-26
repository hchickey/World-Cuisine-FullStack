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
                                       r.Ingredient, r.Instruction, u.FirstName, u.LastName, u.Id AS UserId
                                FROM Recipe r
                                LEFT JOIN [User] u ON u.Id = r.UserId";

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
                                Id = reader.GetInt32(reader.GetOrdinal("UserId")),
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

        public Recipe GetRecipeById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT Id, Name, Description, ImageUrl, UserId,
                            Ingredient, Instruction
                            FROM Recipe
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);
                    var reader = cmd.ExecuteReader();

                    Recipe recipe = null;

                    if(reader.Read())
                    {
                        recipe = new Recipe()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Description = reader.GetString(reader.GetOrdinal("Description")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            Ingredient = reader.GetString(reader.GetOrdinal("Ingredient")),
                            Instruction = reader.GetString(reader.GetOrdinal("Instruction"))
                        };

                        if (!reader.IsDBNull(reader.GetOrdinal("ImageUrl")))
                        {
                            recipe.ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl"));
                        }
                    }

                    reader.Close();
                    return recipe;
                }
            }
        }

        public void AddRecipe(Recipe recipe)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            INSERT INTO Recipe (Name, Description, ImageUrl, UserId, Ingredient, Instruction)
                            OUTPUT INSERTED.ID
                            VALUES (@Name, @Description, @ImageUrl, @UserId, @Ingredient, @Instruction)";
                    cmd.Parameters.AddWithValue("@Name", recipe.Name);
                    cmd.Parameters.AddWithValue("@Description", recipe.Description);
                    cmd.Parameters.AddWithValue("@ImageUrl", recipe.ImageUrl == null ? DBNull.Value : recipe.ImageUrl);
                    cmd.Parameters.AddWithValue("@UserId", recipe.UserId);
                    cmd.Parameters.AddWithValue("@Ingredient", recipe.Ingredient);
                    cmd.Parameters.AddWithValue("@Instruction", recipe.Instruction);

                    recipe.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void UpdateRecipe(Recipe recipe)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Recipe
                            SET Name = @Name,
                                Description = @Description,
                                ImageUrl = @ImageUrl,
                                Ingredient = @Ingredient,
                                Instruction = @Instruction
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", recipe.Id);
                    cmd.Parameters.AddWithValue("@Name", recipe.Name);
                    cmd.Parameters.AddWithValue("@Description", recipe.Description);
                    cmd.Parameters.AddWithValue("@ImageUrl", recipe.ImageUrl);
                    cmd.Parameters.AddWithValue("@Ingredient", recipe.Ingredient);
                    cmd.Parameters.AddWithValue("@Instruction", recipe.Instruction);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
