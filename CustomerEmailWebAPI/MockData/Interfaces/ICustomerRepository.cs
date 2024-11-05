using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.MockRepository.Interfaces
{
    public interface ICustomerRepository
    {
        void Create(Customer newCustomer);
        IEnumerable<Customer> GetAll();
        void Update(Customer customer);
        void UpdateAll(List<Customer> customers);
    }
}
