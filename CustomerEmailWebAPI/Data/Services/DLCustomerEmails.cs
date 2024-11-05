using CustomerEmailProgram.Data.Interfaces;
using CustomerEmailProgram.MockRepository.Interfaces;
using CustomerEmailProgram.MockRepository.Repositories;
using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.Data.Services
{
    public class DLCustomerEmails: IDLCustomerEmails
    {
        private readonly IEmailRepository _emailRepo;
        private readonly ICustomerRepository _customerRepo;

        public DLCustomerEmails(IEmailRepository emailRepo, ICustomerRepository customerRepo) 
        {
            _emailRepo = emailRepo;
            _customerRepo = customerRepo;
        }   

        public async void CreateCustomer(Customer customer)
        {
            _customerRepo.Create(customer);
        }
        public async void CreateEmail(Email email)
        {
            _emailRepo.Create(email);
        }
        public async void DeleteCustomer(Guid customer)
        {
            _customerRepo.Remove(customer);
        }
        public async void DeleteEmail(Guid email)
        {
            _emailRepo.Remove(email);
        }
        public async Task<Customer> GetCustomerById(Guid customerId)
        {
            return _customerRepo.GetAll().Where(c => c.Id == customerId).FirstOrDefault();
        }
        public async Task<Email> GetEmailById(Guid emailId)
        {
            return _emailRepo.GetAll().Where(e => e.Id == emailId).FirstOrDefault();
        }
        public async Task<IEnumerable<Customer>> GetAllCustomers()
        {
            return _customerRepo.GetAll();
        }

        public async Task<IEnumerable<Email>> GetAllEmails()
        {
            return _emailRepo.GetAll();
        }
        public async void UpdateEmail(Email email)
        {
            _emailRepo.Update(email);
        }
    }
}
