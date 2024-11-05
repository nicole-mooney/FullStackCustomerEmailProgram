using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.Business.Interfaces
{
    public interface IBLCustomerEmails
    {
        Task<List<CustomerEmail>> GetAllCustomerEmails();
    }
}
