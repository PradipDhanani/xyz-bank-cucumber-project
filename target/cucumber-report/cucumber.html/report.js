$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/bank/resources/featurefile/bankmanagercustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Bank manager Add customer successfully",
  "description": "As a user\r\nI want to visit xyz bank website",
  "id": "bank-manager-add-customer-successfully",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14334162000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify manager should add customer successfully",
  "description": "",
  "id": "bank-manager-add-customer-successfully;verify-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On bank manager login tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter first name \"Hermoine\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter last name \"Granger\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter postcode \"E859AC\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "System should display popup message Click on ok button on pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "System shows customer added successfully message",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 1101690000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 396502700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 375504600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine",
      "offset": 20
    }
  ],
  "location": "BankManagerAndCustomer.iEnterFirstName(String)"
});
formatter.result({
  "duration": 469241600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Granger",
      "offset": 19
    }
  ],
  "location": "BankManagerAndCustomer.iEnterLastName(String)"
});
formatter.result({
  "duration": 162256100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E859AC",
      "offset": 18
    }
  ],
  "location": "BankManagerAndCustomer.iEnterPostcode(String)"
});
formatter.result({
  "duration": 160050100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 312781500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.systemShouldDisplayPopupMessageClickOnOkButtonOnPop()"
});
formatter.result({
  "duration": 20836600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.systemShowsCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.after({
  "duration": 156200,
  "status": "passed"
});
formatter.before({
  "duration": 12901493600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify bank manager should open account successfully",
  "description": "",
  "id": "bank-manager-add-customer-successfully;verify-bank-manager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click On bank manager login tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on open account button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select customer first name",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on selected currency button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select currency as pound",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see message account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 4247600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1781457400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnOpenAccountButton()"
});
formatter.result({
  "duration": 1954008900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iSelectCustomerFirstName()"
});
formatter.result({
  "duration": 1378305000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnSelectedCurrencyButton()"
});
formatter.result({
  "duration": 973153500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iSelectCurrencyAsPound()"
});
formatter.result({
  "duration": 142405700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnProcessButton()"
});
formatter.result({
  "duration": 276280400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iCanSeeMessageAccountCreatedSuccessfully()"
});
formatter.result({
  "duration": 18284300,
  "status": "passed"
});
formatter.after({
  "duration": 41300,
  "status": "passed"
});
formatter.before({
  "duration": 19447343300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify customer should login and logout successfully",
  "description": "",
  "id": "bank-manager-add-customer-successfully;verify-customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on customer login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on to search your name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click select name",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be login successfully and displayed logout message",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on logout tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see displayed your name",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 2841100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 1668584700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnToSearchYourName()"
});
formatter.result({
  "duration": 1374686500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickSelectName()"
});
formatter.result({
  "duration": 145049100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnLoginButton()"
});
formatter.result({
  "duration": 274236800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iShouldBeLoginSuccessfullyAndDisplayedLogoutMessage()"
});
formatter.result({
  "duration": 492242100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnLogoutTab()"
});
formatter.result({
  "duration": 100609500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iShouldSeeDisplayedYourName()"
});
formatter.result({
  "duration": 82309200,
  "status": "passed"
});
formatter.after({
  "duration": 53600,
  "status": "passed"
});
formatter.uri("src/test/java/com/bank/resources/featurefile/customerdepositwithdrawdelete.feature");
formatter.feature({
  "line": 1,
  "name": "Customer deposit money withdrawal money delete account functionality",
  "description": "As a user\r\nI want to visit xyz bank website",
  "id": "customer-deposit-money-withdrawal-money-delete-account-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17559214400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify customer should deposit money successfully",
  "description": "",
  "id": "customer-deposit-money-withdrawal-money-delete-account-functionality;verify-customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on customer login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I search customer that is created",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select searched customer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter amount \"100\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see deposit amount successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 1413900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 1514258500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iSearchCustomerThatIsCreated()"
});
formatter.result({
  "duration": 504954700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iSelectSearchedCustomer()"
});
formatter.result({
  "duration": 291536600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnLoginButton()"
});
formatter.result({
  "duration": 164015500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnDepositButton()"
});
formatter.result({
  "duration": 1446278300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "CustomerDepositWithdrawDelete.iEnterAmount(String)"
});
formatter.result({
  "duration": 601569700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnDepositButton()"
});
formatter.result({
  "duration": 79042300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iShouldSeeDepositAmountSuccessfully()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.after({
  "duration": 30500,
  "status": "passed"
});
formatter.before({
  "duration": 16345428300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verify customer should withdraw money successfully",
  "description": "",
  "id": "customer-deposit-money-withdrawal-money-delete-account-functionality;verify-customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on customer login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I search customer that is created",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select searched customer",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter amount \"50\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on withdrawal button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I customer should withdrawal amount successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 2653900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 829297800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iSearchCustomerThatIsCreated()"
});
formatter.result({
  "duration": 506523200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iSelectSearchedCustomer()"
});
formatter.result({
  "duration": 146532000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerAndCustomer.iClickOnLoginButton()"
});
formatter.result({
  "duration": 216256500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnWithdrawalButton()"
});
formatter.result({
  "duration": 430343200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 16
    }
  ],
  "location": "CustomerDepositWithdrawDelete.iEnterAmount(String)"
});
formatter.result({
  "duration": 375734200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnWithdrawalButton()"
});
formatter.result({
  "duration": 128956600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iCustomerShouldWithdrawalAmountSuccessfully()"
});
formatter.result({
  "duration": 199600,
  "status": "passed"
});
formatter.after({
  "duration": 40200,
  "status": "passed"
});
formatter.before({
  "duration": 13250845600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "verify bank manager should delete customer account successfully",
  "description": "",
  "id": "customer-deposit-money-withdrawal-money-delete-account-functionality;verify-bank-manager-should-delete-customer-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on bank manager login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on customer button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on searched customer",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I click select name \"Hermoine\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on delete customer button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should delete customer successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankManagerAndCustomer.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 3341300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnBankManagerLoginButton()"
});
formatter.result({
  "duration": 1342112100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnCustomerButton()"
});
formatter.result({
  "duration": 297998500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnSearchedCustomer()"
});
formatter.result({
  "duration": 530882400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine",
      "offset": 21
    }
  ],
  "location": "CustomerDepositWithdrawDelete.iClickSelectName(String)"
});
formatter.result({
  "duration": 222209400,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iClickOnDeleteCustomerButton()"
});
formatter.result({
  "duration": 233556900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerDepositWithdrawDelete.iShouldDeleteCustomerSuccessfully()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.after({
  "duration": 33200,
  "status": "passed"
});
});