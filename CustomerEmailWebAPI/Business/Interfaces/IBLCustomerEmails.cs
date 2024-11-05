using CustomerEmailProgram.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustomerEmailProgram.Business.Interfaces
{
    public interface IBLCustomerEmails
    {
        Task<bool> BulkSendEmail(string emailMessage);
        Task<Customer> CreateNewCustomer(NewCustomerRequest newCustomer);
        Task<bool> DeleteCustomer(string customerId);
        Task<bool> DeleteEmail(string emailId);
        Task<List<CustomerEmail>> GetAllCustomerEmails();
        Task<CustomerEmail> SendNewEmail(NewEmailRequest email);
        Task<CustomerEmail> UpdateDraftEmail(UpdateEmailRequest email);
    }
}
