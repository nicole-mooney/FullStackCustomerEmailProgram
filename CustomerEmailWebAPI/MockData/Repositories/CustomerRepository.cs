using CustomerEmailProgram.MockData.GlobalGuids;
using CustomerEmailProgram.MockRepository.Interfaces;
using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.MockRepository.Repositories
{
    class CustomerRepository : ICustomerRepository 
    {
        public List<Customer> _customers;
        public readonly GlobalCustomerIds globalCustomerIds = new GlobalCustomerIds();

        public CustomerRepository()
        {
            _customers = new List<Customer> { 
                new Customer { Id = globalCustomerIds.FirstCustomerId, FirstName = "First", LastName = "Customer", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Customer { Id = globalCustomerIds.SecondCustomerId, FirstName = "Second", LastName = "Customer", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Customer { Id = globalCustomerIds.ThirdCustomerId, FirstName = "Third", LastName = "Customer", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Customer { Id = globalCustomerIds.FourthCustomerId, FirstName = "Fourth", LastName = "Customer", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Customer { Id = globalCustomerIds.FifthCustomerId, FirstName = "Fifth", LastName = "Customer", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow }
            };
        }

        public void Create(Customer newCustomer)
        {
            try
            {
                _customers.Add(newCustomer);
            }
            catch (Exception e)
            {
                throw new Exception("Create for CustomerRepository threw an exception.");
            };
        }

        public IEnumerable<Customer> GetAll()
        {
            try
            {
                return _customers;
            }
            catch (Exception e)
            {
                throw new Exception("GetAll for CustomerRepository threw an exception.");
            };
        }

        public void Remove(Guid customerId)
        {
            try
            {
                var customerIndexInDB = _customers.FindIndex(c => c.Id == customerId);
                if (customerIndexInDB != null && customerIndexInDB >= 0)
                {
                    _customers.RemoveAt(customerIndexInDB);
                }
                else
                {
                    throw new Exception("Failed to remove customer. It does not exist in the repository.");
                }
            }
            catch (Exception e)
            {
                throw new Exception("Remove for CustomerRepository threw an exception.");
            };
        }

        public void Update(Customer customer)
        {
            
            try
            {
                var customerIndexInDB = _customers.FindIndex(c => c.Id == customer.Id);
                if (customerIndexInDB != null && customerIndexInDB >= 0)
                {
                    _customers[customerIndexInDB] = customer;
                }
                else
                {
                    throw new Exception("Failed to update customer. It does not exist in the repository.");
                }
            }
            catch (Exception e)
            {
                throw new Exception("Update for CustomerRepository threw an exception.");
            };
        }

        public void UpdateAll(List<Customer> customers)
        {
            try
            {
                _customers = customers;
            }
            catch (Exception e)
            {
                throw new Exception("UpdateAll for CustomerRepository threw an exception.");
            };
        }
    }
}
