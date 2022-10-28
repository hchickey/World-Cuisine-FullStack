namespace World_Cuisine.Models
{
    public class CountryRecipe
    {
        public int Id { get; set; }
        public int CountryId { get; set; }
        public int RecipeId { get; set; }
        public Country Country { get; set; }
    }
}
