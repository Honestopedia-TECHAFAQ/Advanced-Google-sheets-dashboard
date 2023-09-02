function sendEmailNotification(requestor, amountRequested, department) {
  var subject = "Approval Request: $" + amountRequested + " for " + department;
  var message = "Dear Approver,\n\n" +
                "There is a new approval request:\n\n" +
                "Requestor: " + requestor + "\n" +
                "Department: " + department + "\n" +
                "Amount Requested: $" + amountRequested + "\n\n" +
                "Please review and take action.\n\n" +
                "Best regards,\n" +
                "Your Company";

  
  var recipient = 'recipient@example.com';

  MailApp.sendEmail(recipient, subject, message);
}

function onApprovalRequestSubmit() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Approval Requests");
  var data = sheet.getDataRange().getValues();
  var lastRow = data.length;


  if (data[lastRow - 1][8] === "Pending") {
    var requestor = data[lastRow - 1][1];
    var amountRequested = data[lastRow - 1][4];
    var department = data[lastRow - 1][2];

    sendEmailNotification(requestor, amountRequested, department);
  }
}
