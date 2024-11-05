namespace CustomerEmailProgram.Models
{
    public class CustomerEmail
    {
        public string CustomerName { get; set; }
        public Guid CustomerId { get; set; }
        public string Message { get; set; }        
        public DateTime CreatedDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
    }
}
