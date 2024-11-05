using CustomerEmailProgram.MockData.GlobalGuids;
using CustomerEmailProgram.MockRepository.Interfaces;
using CustomerEmailProgram.Models;

namespace CustomerEmailProgram.MockRepository.Repositories
{
    class EmailRepository : IEmailRepository
    {
        public List<Email> _emails;
        public readonly GlobalEmailIds globalEmailIds = new GlobalEmailIds();
        public readonly GlobalCustomerIds globalCustomerIds = new GlobalCustomerIds();

        public EmailRepository()
        {
            _emails = new List<Email> { 
                new Email { Id = globalEmailIds.FirstCustomerInitialEmailId, CustomerId = globalCustomerIds.FirstCustomerId, Message = "This is the first initial test.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.SecondCustomerInitialEmailId, CustomerId = globalCustomerIds.SecondCustomerId, Message = "This is the second initial test.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.ThirdCustomerInitialEmailId, CustomerId = globalCustomerIds.ThirdCustomerId, Message = "This is the third initial test.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.FourthCustomerInitialEmailId, CustomerId = globalCustomerIds.FourthCustomerId, Message = "This is the fourth initial test.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.FifthCustomerInitialEmailId, CustomerId = globalCustomerIds.FifthCustomerId, Message = "This is the fifth initial test.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.FirstCustomerEmergencyContactEmailId, CustomerId = globalCustomerIds.FirstCustomerId, Message = "First Customer, Please respond with an emergency point of contact for your request for a rental vehicle while your vehicle is in service.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.FirstCustomerFollowUpEmailId, CustomerId = globalCustomerIds.FirstCustomerId, Message = "First Customer, This is a follow-up that we cannot release a rental vehicle until an emergency contact is added.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.SecondCustomerInspectionReportEmailId, CustomerId = globalCustomerIds.SecondCustomerId, Message = "Second Customer, Please give us a call for your inspection report outcome for your 2019 Toyota Tacoma.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.ThirdCustomerSecondPointOfContactEmailId, CustomerId = globalCustomerIds.ThirdCustomerId, Message = "Third Customer, We attempted to contact you earlier today about your vehicle. Your 2024 Nissan Murano is ready for pick-up.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.ThirdCustomerOneHourUntilCloseEmailId, CustomerId = globalCustomerIds.ThirdCustomerId, Message = "Third Customer, Our services department closes in an hour. Please be aware that it is an extra $25 fee for overnight boarding for a vehicle that is ready for pick-up.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.FourthCustomerRoutineServicesDueEmailId, CustomerId = globalCustomerIds.FourthCustomerId, Message = "Fourth Customer, You chose to subscribe for email reminders on when your next services is due for your vehicle. Please contact our office to schedule an appointment. If you wish to no longer be subscribed, please reply back with 'unsubscribe'.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.FourthCustomerUnsubscribedFromRoutineServiceReminderEmailId, CustomerId = globalCustomerIds.FourthCustomerId, Message = "Fourth Customer, You chose to unsubscribe for email reminders on when your next services is due.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.FifthCustomerRoutineServicesDueEmailId, CustomerId = globalCustomerIds.FifthCustomerId, Message = "Fifth Customer, You chose to subscribe for email reminders on when your next services is due for your vehicle. Please contact our office to schedule an appointment. If you wish to no longer be subscribed, please reply back with 'unsubscribe'.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.FifthCustomerServicesScheduleConfirmationEmailId, CustomerId = globalCustomerIds.FifthCustomerId, Message = "Fifth Customer, This is a confirmation email that you scheduled a services appointment for November 15th. Please contact our office if a reschedule is needed at any time.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow },
                new Email { Id = globalEmailIds.FifthCustomerExtendedServicesRecommendedEmailId, CustomerId = globalCustomerIds.FifthCustomerId, Message = "Fifth Customer, Please give our services department a call regarding your 2007 Lexus RX.", CreatedDate = DateTime.UtcNow, LastUpdatedDate = DateTime.UtcNow }
            };
        }

        public void Create(Email newEmail)
        {
            //var newID = _customers.OrderBy(c => c.ID).LastOrDefault(); 
            //newCustomer.ID = new Guid();
            try
            {
                _emails.Add(newEmail);
            }
            catch (Exception e)
            {
                throw new Exception("Create for EmailRepository threw an exception.");
            };
        }

        public IEnumerable<Email> GetAll()
        {
            try 
            { 
                return _emails; 
            }
            catch (Exception e) 
            {
                throw new Exception("GetAll for EmailRepository threw an exception.");
            };
        }

        public void Update(Email email)
        {
            try
            {
                var customerInDB = _emails.Where(e => e.Id == email.Id).FirstOrDefault();
                if (customerInDB != null)
                {
                    customerInDB = email;
                }
                else
                {
                    throw new Exception("Failed to update email. It does not exist in the repository.");
                }
            }
            catch (Exception e)
            {
                throw new Exception("Update for EmailRepository threw an exception.");
            };
            
        }

        public void UpdateAll(List<Email> emails)
        {
            try
            {
                _emails = emails;
            }
            catch (Exception e)
            {
                throw new Exception("UpdateAll for EmailRepository threw an exception.");
            };
        }
    }
}
