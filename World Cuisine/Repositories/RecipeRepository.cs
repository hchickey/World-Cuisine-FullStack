using Microsoft.Extensions.Configuration;
using World_Cuisine.Models;
using System;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Linq;

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
                            SELECT r.Id AS RecipeId, r.Name, r.Description, r.ImageUrl, r.UserId,
                            r.Ingredient, r.Instruction, u.FirstName, u.LastName, u.Id AS UserId, u.Email
                            FROM Recipe r
                            LEFT JOIN [User] u ON u.Id = r.UserId
                            WHERE r.Id = @Id";

                    cmd.Parameters.AddWithValue("@Id", id);
                    var reader = cmd.ExecuteReader();

                    Recipe recipe = null;

                    if(reader.Read())
                    {
                        recipe = new Recipe()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("RecipeId")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Description = reader.GetString(reader.GetOrdinal("Description")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            Ingredient = reader.GetString(reader.GetOrdinal("Ingredient")),
                            Instruction = reader.GetString(reader.GetOrdinal("Instruction")),
                            User = new User()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UserId")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                Email = reader.GetString(reader.GetOrdinal("Email"))
                            }
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
                    cmd.Parameters.AddWithValue("@ImageUrl", recipe.ImageUrl == null ? DBNull.Value : recipe.ImageUrl);
                    cmd.Parameters.AddWithValue("@Ingredient", recipe.Ingredient);
                    cmd.Parameters.AddWithValue("@Instruction", recipe.Instruction);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteRecipe(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM Recipe WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Recipe> GetAllWithCountries()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT r.Id AS RecipeId, r.Name, r.Description, r.ImageUrl, r.Ingredient, r.Instruction,
                              r.UserId, c.Id AS CountryId, c.Name AS CountryName, cr.Id AS CountryRecipeId,
                              cr.RecipeId AS RecipeCId, cr.CountryId AS CountryCId,
                              u.FirstName, u.LastName, u.Email ,u.Id AS UserId

                        FROM Recipe r
                        LEFT JOIN [User] u ON u.Id = r.UserId
                        LEFT JOIN CountryRecipe cr ON cr.RecipeId = r.Id
                        LEFT JOIN Country c ON c.Id = cr.CountryId
                        ORDER BY c.Name";

                    using (var reader = cmd.ExecuteReader())
                    {
                        var recipes = new List<Recipe>();
                        while(reader.Read())
                        {
                            var recipeId = reader.GetInt32(reader.GetOrdinal("RecipeId"));

                            var existingRecipe = recipes.FirstOrDefault(p => p.Id == recipeId);
                            if(existingRecipe == null)
                            {
                                existingRecipe = new Recipe()
                                {
                                    Id = recipeId,
                                    Name = reader.GetString(reader.GetOrdinal("Name")),
                                    Description = reader.GetString(reader.GetOrdinal("Description")),
                                    UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                                    Ingredient = reader.GetString(reader.GetOrdinal("Ingredient")),
                                    Instruction = reader.GetString(reader.GetOrdinal("Instruction")),
                                    Countries = new List<CountryRecipe>(),
                                    User = new User()
                                    {
                                        Id = reader.GetInt32(reader.GetOrdinal("UserId")),
                                        FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                        LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                        Email = reader.GetString(reader.GetOrdinal("Email"))
                                    }
                                };
                                recipes.Add(existingRecipe);
                            }

                            if(!reader.IsDBNull(reader.GetOrdinal("CountryRecipeId")))
                            {
                                existingRecipe.Countries.Add(new CountryRecipe()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("CountryRecipeId")),
                                    RecipeId = reader.GetInt32(reader.GetOrdinal("RecipeCId")),
                                    CountryId = reader.GetInt32(reader.GetOrdinal("CountryCId")),
                                    Country = new Country()
                                    {
                                        Id = reader.GetInt32(reader.GetOrdinal("CountryId")),
                                        Name = reader.GetString(reader.GetOrdinal("CountryName"))
                                    }
                                });
                            }
                        }
                        return recipes;
                    }
                }
            }
        }
    }
}
