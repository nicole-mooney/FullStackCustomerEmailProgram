using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.MockRepository.Interfaces
{
    public interface IEmailRepository
    {
        void Create(Email newEmail);
        IEnumerable<Email> GetAll();
        void Update(Email email);
        void UpdateAll(List<Email> emails);
    }
}
