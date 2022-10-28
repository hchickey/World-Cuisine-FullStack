using System.Collections.Generic;
using World_Cuisine.Models;

namespace World_Cuisine.Repositories
{
    public interface ICountryRepository
    {
        List<Country> GetAllCountries();
    }
}