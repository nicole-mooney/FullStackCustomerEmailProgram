This is the Customers Email Program.

<b>NOTE: When you refresh the table or page, the new data is removed from that session and you begin again with the original 15 email records pre-built into the application.
</b>

Here, you are given a mock data list of emails sent out to customers. In total, there are 15 mock emails and 5 mock customers.
The emails are in their own mock repository, which the customers are in a separate one as well.
All in all, there are 20 mock records.

The front-end, angular-based part of the application can be found in the folder called 'CustomerEmailAngularWebPage'.
The back-end, .NET 8 C# part of the application can be found in the folder called 'CustomerEmailWebAPI'.

The back-end is designed under the common three-layer architecture found amongst other .NET Core applications:
Controller, Business Logic, and Data Logic, with the BL and DL containing Interfaces as well.

Furthermore, the Data Logic contains the Mock Repository files that house calls such as .Create, .Remove, .Update, etc.

In the front-end, you are able to:
* delete a customer,
* delete an email,
* bulk send an email to all customers,
* add a new customer, and
* send a new email to an existing customer.

Further development on this program would ensure that you as the client would be able to do extra activities such as:
* save an email as a draft
* bulk delete emails/customers
* send an email to 2+ customers
* etc.
