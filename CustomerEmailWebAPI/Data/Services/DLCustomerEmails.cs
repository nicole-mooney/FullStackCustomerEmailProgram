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

        public async Task<IEnumerable<Email>> GetAllEmails()
        {
            return _emailRepo.GetAll();

        }

        public async Task<IEnumerable<Customer>> GetAllCustomers()
        {
            return _customerRepo.GetAll();

        }
    }
}
