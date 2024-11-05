export class NewEmailRequest {
    customerId: string = "";
    message: string = "";
    constructor(customerId: string, message: string) {
        this.customerId = customerId;
        this.message = message;
    }
}