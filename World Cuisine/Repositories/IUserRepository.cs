using World_Cuisine.Models;

namespace World_Cuisine.Repositories
{
    public interface IUserRepository
    {
        User GetByFirebaseUserId(string firebaseUserId);
    }
}