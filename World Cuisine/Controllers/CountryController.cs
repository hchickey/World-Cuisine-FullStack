using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using World_Cuisine.Repositories;

namespace World_Cuisine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly ICountryRepository _countryRepo;
        public CountryController(ICountryRepository countryRepo)
        {
            _countryRepo = countryRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_countryRepo.GetAllCountries());
        }
    }
}
