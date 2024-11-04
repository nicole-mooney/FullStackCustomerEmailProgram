using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.MockRepository.Interfaces
{
    interface ICustomerRepository
    {
        void Create(Customer newCustomer);
        IEnumerable<Customer> Get();
        void Update(Customer customer);
        void UpdateAll(List<Customer> customers);
    }
}
