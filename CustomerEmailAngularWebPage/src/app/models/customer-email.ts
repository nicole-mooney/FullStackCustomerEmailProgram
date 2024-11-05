export class CustomerEmail {
    customerName: string = "";
    customerId: string = "";
    message: string = "";
    emailId: string = "";
    isDraft: boolean = false;
    createdDate: Date = new Date();
    lastUpdatedDate: Date = new Date();
    constructor(customerName: string, customerId: string, message: string, emailId: string,
        isDraft: boolean, createdDate: Date, lastUpdatedDate: Date
    ) {
        this.customerName = customerName;
        this.customerId = customerId;
        this.message = message;
        this.emailId = emailId;
        this.isDraft = isDraft;
        this.createdDate = createdDate;
        this.lastUpdatedDate = lastUpdatedDate;
    }
}