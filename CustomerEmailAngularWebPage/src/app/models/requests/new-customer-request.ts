export class NewCustomerRequest {
    firstName: string = "";
    lastName: string = "";
    initialEmail: string = "";
    constructor(firstName: string, lastName: string, initialEmail: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.initialEmail = initialEmail;
    }
}