using CustomerEmailProgram.MockRepository.Interfaces;
using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.MockRepository.Repositories
{
    class DummyCustomerRepository : ICustomerRepository 
    {
        private List<Customer> _customers;

        public DummyCustomerRepository()
        {
            //populate your dictionary
        }

        public void Create(Customer newCustomer)
        {
            var newID = _customers.OrderBy(c => c.ID).LastOrDefault(); 
            newCustomer.ID = newID != null ? newID.ID++ : 0;
            _customers.Add(newCustomer);
        }

        public IEnumerable<Customer> Get()
        {
            return _customers;
        }

        public void Update(Customer customer)
        {
            var customerInDB = _customers.Where(c => c.ID == customer.ID).FirstOrDefault();
            customerInDB = customer;
        }

        public void UpdateAll(List<Customer> customers)
        {
            _customers = customers;
        }
    }
}
