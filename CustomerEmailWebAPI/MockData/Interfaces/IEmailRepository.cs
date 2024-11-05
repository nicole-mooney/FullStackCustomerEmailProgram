using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.MockRepository.Interfaces
{
    public interface IEmailRepository
    {
        void Create(Email newEmail);
        IEnumerable<Email> GetAll();
        void Remove(Guid emailId);
        void Update(Email email);
        void UpdateAll(List<Email> emails);
    }
}
