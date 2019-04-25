using Microsoft.AspNetCore.Mvc;

namespace VueWorkshop.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
