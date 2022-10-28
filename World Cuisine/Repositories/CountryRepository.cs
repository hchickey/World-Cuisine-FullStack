using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using World_Cuisine.Models;

namespace World_Cuisine.Repositories
{
    public class CountryRepository : BaseRepository, ICountryRepository
    {
        public CountryRepository(IConfiguration configuration) : base(configuration) { }

        public List<Country> GetAllCountries()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT Id, Name
                            FROM Country";

                    var countries = new List<Country>();

                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Country country = new Country()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name"))
                        };
                        countries.Add(country);
                    }
                    return countries;
                }
            }
        }
    }
}
