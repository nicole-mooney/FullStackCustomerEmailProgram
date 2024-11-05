using CustomerEmailProgram.Business.Interfaces;
using CustomerEmailProgram.Data.Interfaces;
using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.Business.Services
{
    public class BLCustomerEmails: IBLCustomerEmails
    {
        private readonly IDLCustomerEmails _dlCustomerEmails;

        public BLCustomerEmails(IDLCustomerEmails dlCustomerEmails)
        {
            _dlCustomerEmails = dlCustomerEmails;
        }

        public async Task<List<CustomerEmail>> GetAllCustomerEmails()
        {
            var customerEmails = new List<CustomerEmail>();
            var emails = await _dlCustomerEmails.GetAllEmails();
            var customers = await _dlCustomerEmails.GetAllCustomers();
            foreach (var email in emails) {
                var customerEmail = customers.Where(c => c.Id == email.CustomerId).FirstOrDefault();
                customerEmails.Add(new CustomerEmail
                {
                    CustomerName = customerEmail.FirstName + " " + customerEmail.LastName,
                    CustomerId = customerEmail.Id,
                    Message = email.Message,
                    CreatedDate = email.CreatedDate,
                    LastUpdatedDate = email.LastUpdatedDate
                });
            }
            return customerEmails;
        }
    }
}
