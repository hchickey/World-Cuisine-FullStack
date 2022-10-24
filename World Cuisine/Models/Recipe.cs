namespace World_Cuisine.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public int UserId { get; set; }
        public string Ingredient { get; set; }
        public string Instruction { get; set; }
        public User User { get; set; }
    }
}
