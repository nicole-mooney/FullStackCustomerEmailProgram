namespace CustomerEmailProgram.Models
{
    public class UpdateEmailRequest
    {
        public string EmailId { get; set; }
        public bool IsDraft { get; set; }
        public string Message { get; set; }
    }
}
