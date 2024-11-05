export class UpdateEmailRequest {
    emailId: string = "";
    isDraft: boolean = false;
    message: string = "";
    constructor(emailId: string, isDraft: boolean, message: string) {
        this.emailId = emailId;
        this.isDraft = isDraft;
        this.message = message;
    }
}