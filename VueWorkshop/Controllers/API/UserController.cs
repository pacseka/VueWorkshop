using Bogus;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using VueWorkshop.Models;

namespace VueWorkshop.Controllers.API
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {

            var users = CreateFakeUser(10);
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var user = CreateFakeUser(1).First();
            return Ok(user);
        }


        private List<User> CreateFakeUser(int count)
        {
            var usersFake = new Faker<User>()
                .RuleFor(u => u.Id, (f) => f.Random.Guid())
                .RuleFor(u => u.Name, (f, u) => f.Name.FullName())
                .RuleFor(u => u.Email, (f, u) => f.Internet.Email(u.Name))
                .RuleFor(u => u.PhoneNumber, (f) => f.Phone.PhoneNumber());

            return usersFake.Generate(count); 
        }
    }
}
