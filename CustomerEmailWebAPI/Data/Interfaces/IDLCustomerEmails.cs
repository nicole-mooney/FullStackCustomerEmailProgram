using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.Data.Interfaces
{
    public interface IDLCustomerEmails
    {
        Task<IEnumerable<Email>> GetAllEmails();
        Task<IEnumerable<Customer>> GetAllCustomers();

    }
}
