using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.Data.Interfaces
{
    public interface IDLCustomerEmails
    {
        void CreateCustomer(Customer customer);
        void CreateEmail(Email email);
        void DeleteCustomer(Guid customerId);
        void DeleteEmail(Guid emailId);
        Task<Customer> GetCustomerById(Guid customerId);
        Task<Email> GetEmailById(Guid emailId);
        Task<IEnumerable<Customer>> GetAllCustomers();
        Task<IEnumerable<Email>> GetAllEmails();
        void UpdateEmail(Email email);
    }
}
