using CustomerEmailProgram.Business.Interfaces;
using CustomerEmailProgram.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustomerEmailProgram.Controllers
{
    [ApiController]
    [Route("api/CustomerEmails/")]
    public class CustomerEmailsController : ControllerBase
    {
        private readonly ILogger<CustomerEmailsController> _logger;
        private readonly IBLCustomerEmails _blCustomerEmails;

        public CustomerEmailsController(ILogger<CustomerEmailsController> logger, IBLCustomerEmails bLCustomerEmails)
        {
            _logger = logger;
            _blCustomerEmails = bLCustomerEmails;
        }

        #region GET WebAPI Calls

        [HttpGet("GetCustomerEmails")]
        public async Task<IActionResult> GetCustomerEmails()
        {
            var response = await _blCustomerEmails.GetAllCustomerEmails();
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
