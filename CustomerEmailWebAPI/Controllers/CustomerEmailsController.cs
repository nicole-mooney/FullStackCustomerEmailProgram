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

        [HttpPost("BulkSendEmail")]
        public async Task<IActionResult> BulkSendEmail(string emailMessage)
        {
            var response = await _blCustomerEmails.BulkSendEmail(emailMessage);
            return Ok(response);
        }

        [HttpPost("CreateNewCustomer")]
        public async Task<IActionResult> CreateNewCustomer(NewCustomerRequest newCustomer)
        {
            var customer = await _blCustomerEmails.CreateNewCustomer(newCustomer);
            return Ok(customer);
        }

        [HttpPost("DeleteCustomer")]
        public async Task<IActionResult> DeleteCustomer(string customerId)
        {
            var response = await _blCustomerEmails.DeleteCustomer(customerId);
            return Ok(response);
        }

        [HttpPost("DeleteEmail")]
        public async Task<IActionResult> DeleteEmail(string emailId)
        {
            var response = await _blCustomerEmails.DeleteEmail(emailId);
            return Ok(response);
        }        

        [HttpPost("SendEmailToCustomer")]
        public async Task<IActionResult> SendEmailToCustomer(NewEmailRequest email)
        {
            var customerEmail = await _blCustomerEmails.SendNewEmail(email);
            return Ok(customerEmail);
        }

        [HttpPost("UpdateDraftEmail")]
        public async Task<IActionResult> UpdateDraftEmail(UpdateEmailRequest email)
        {
            var draftEmail = await _blCustomerEmails.UpdateDraftEmail(email);
            return Ok(draftEmail);
        }

        #endregion


    }
}
