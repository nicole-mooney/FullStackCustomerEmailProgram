using CustomerEmailProgram.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustomerEmailProgram.Controllers
{
    [ApiController]
    [Route("api/CustomerEmails/")]
    public class CustomerEmailsController : ControllerBase
    {
        private readonly ILogger<CustomerEmailsController> _logger;

        public CustomerEmailsController(ILogger<CustomerEmailsController> logger)
        {
            _logger = logger;
        }

        #region GET WebAPI Calls

        [HttpGet("GetCustomerEmails")]
        public async Task<IActionResult> GetCustomerEmails()
        {
            var response = new List<Customer>();
            return Ok(response);
        }

        #endregion

        #region POST WebAPI Calls

        [HttpPost("CreateNewCustomer")]
        public async Task<IActionResult> CreateNewCustomer(NewCustomerRequest newCustomer)
        {
            return null;
        }

        [HttpPost("DeleteCustomer")]
        public async Task<IActionResult> DeleteCustomer(int customerId)
        {
            return null;
        }

        [HttpPost("MassUpdateEmail")]
        public async Task<IActionResult> MassUpdateEmail(string massEmail)
        {
            return null;
        }

        [HttpPost("UpdateEmailForCustomer")]
        public async Task<IActionResult> UpdateEmailForCustomer(NewEmailRequest email)
        {
            return null;
        }        

        #endregion


    }
}
