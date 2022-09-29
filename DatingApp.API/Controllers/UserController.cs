using DatingApp.API.Database;
using DatingApp.API.Database.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private readonly DataContext _dbContext;
    public UserController(DataContext dbContext)
    {
      _dbContext = dbContext;
    }

    [HttpGet]
    public ActionResult<IEnumerable<User>> GetUsers()
    {
      return Ok(_dbContext.Users);
    }
  }
}
