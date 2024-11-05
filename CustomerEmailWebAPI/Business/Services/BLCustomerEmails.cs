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

        public async Task<bool> BulkSendEmail(string emailMessage)
        {
            var response = false;
            try
            {
                var customers = await _dlCustomerEmails.GetAllCustomers();
                foreach (var customer in customers) {
                    _dlCustomerEmails.CreateEmail(new Email {
                        Id = Guid.NewGuid(),
                        Message = emailMessage,
                        CustomerId = customer.Id,
                        IsDraft = false,
                        CreatedDate = DateTime.Now,
                        LastUpdatedDate = DateTime.Now,
                    });
                }
                response = true;
            }
            catch {
                throw new Exception("Failed to send out a bulk email. BulkSendEmail for BLBustomerEmail threw an exception.");
            }   
            return response;
        }

        public async Task<Customer> CreateNewCustomer(NewCustomerRequest newCustomer)
        {
            var response = new Customer();
            try
            {
                var newCustomerId = Guid.NewGuid();
                _dlCustomerEmails.CreateCustomer(new Customer
                {
                    Id = newCustomerId,
                    FirstName = newCustomer.FirstName,
                    LastName = newCustomer.LastName,
                    CreatedDate = DateTime.UtcNow,
                    LastUpdatedDate = DateTime.UtcNow,
                });
                if (newCustomer.InitialEmail != null && newCustomer.InitialEmail.Trim() != "")
                {
                    await SendNewEmail(new NewEmailRequest
                    {
                        CustomerId = newCustomerId.ToString(),
                        Message = newCustomer.InitialEmail,
                    });
                }
            }
            catch
            {
                throw new Exception("Failed to create a new customer. CreateNewCustomer for BLBustomerEmail threw an exception.");
            }
            return response;
        }

        public async Task<bool> DeleteCustomer(string customerId)
        {
            var response = false;
            try
            {
                _dlCustomerEmails.DeleteCustomer(new Guid(customerId));
                response = true;
            }
            catch
            {
                throw new Exception("Failed to delete the customer. DeleteCustomer for BLBustomerEmail threw an exception.");
            }
            return response;
        }

        public async Task<bool> DeleteEmail(string emailId)
        {
            var response = false;
            try
            {
                _dlCustomerEmails.DeleteEmail(new Guid(emailId));
                response = true;
            }
            catch
            {
                throw new Exception("Failed to delete the email. DeleteEmail for BLBustomerEmail threw an exception.");
            }
            return response;
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
                    EmailId = email.Id,
                    IsDraft = email.IsDraft,
                    CreatedDate = email.CreatedDate,
                    LastUpdatedDate = email.LastUpdatedDate
                });
            }
            return customerEmails;
        }

        public async Task<CustomerEmail> SendNewEmail(NewEmailRequest email)
        {
            var response = new CustomerEmail();
            try
            {
                _dlCustomerEmails.CreateEmail(new Email
                {
                    Id = Guid.NewGuid(),
                    Message = email.Message,
                    CustomerId = new Guid(email.CustomerId),
                    IsDraft = false,
                    CreatedDate = DateTime.UtcNow,
                    LastUpdatedDate = DateTime.UtcNow,
                });
            }
            catch
            {
                throw new Exception("Failed to send out an email. SendNewEmail for BLBustomerEmail threw an exception.");
            }
            return response;
        }

        public async Task<CustomerEmail> UpdateDraftEmail(UpdateEmailRequest email)
        {
            var response = new CustomerEmail();
            try
            {
                var emailFromDB = await _dlCustomerEmails.GetEmailById(new Guid(email.EmailId));
                _dlCustomerEmails.UpdateEmail(new Email
                {
                    Id = emailFromDB.Id,
                    Message = email.Message,
                    IsDraft = email.IsDraft,
                    LastUpdatedDate = DateTime.UtcNow,
                });
            }
            catch
            {
                throw new Exception("Failed to update the draft email. UpdateDraftEmail for BLBustomerEmail threw an exception.");
            }
            return response;
        }
    }
}
