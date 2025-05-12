"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";

initPrintOut(document.getElementById("txtOut"));

//------------------- Account and Currency Types -------------------

const AccountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kreditkonto",
  Pension: "Pensionskonto"
};

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0955, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.3839, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1580, name: "Australienske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

//------------------- TAccount Class -------------------

class TAccount {
  #type;
  #balance;
  #withdrawCount;
  #currencyType;

  constructor(aType) {
    this.#type = aType;
    this.#balance = 0;
    this.#withdrawCount = 0;
    this.#currencyType = "NOK";
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    const oldType = this.#type;
    this.#type = aType;
    this.#withdrawCount = 0;
    printOut(`Account is changed from ${oldType} to ${aType}`);
  }

  getBalance() {
    const denom = CurrencyTypes[this.#currencyType].denomination;
    return `${this.#balance.toFixed(2)}${denom}`;
  }

  deposit(aAmount, aType = "NOK") {
    const sourceCurrency = CurrencyTypes[aType] || CurrencyTypes["NOK"];
    const targetCurrency = CurrencyTypes[this.#currencyType];
    const convertedAmount = (aAmount * sourceCurrency.value) / targetCurrency.value;
    this.#balance += convertedAmount;
    this.#withdrawCount = 0;
    printOut(`Deposit of ${aAmount.toFixed(2)} ${sourceCurrency.name}, new balance is ${this.#balance.toFixed(2)}${targetCurrency.denomination}`);
  }

  withdraw(aAmount, aType = "NOK") {
    const sourceCurrency = CurrencyTypes[aType] || CurrencyTypes["NOK"];
    const targetCurrency = CurrencyTypes[this.#currencyType];
    const convertedAmount = (aAmount * sourceCurrency.value) / targetCurrency.value;

    switch (this.#type) {
      case AccountType.Saving:
        if (this.#withdrawCount >= 3) {
          printOut("You can't Withdraw from a Sparekonto more than three times!");
          return;
        }
        this.#balance -= convertedAmount;
        this.#withdrawCount++;
        break;

      case AccountType.Pension:
        printOut("You can't withdraw from a Pensionskonto!");
        return;

      default:
        this.#balance -= convertedAmount;
        break;
    }

    printOut(`Withdrawal of ${aAmount.toFixed(2)} ${sourceCurrency.name}, new balance is ${this.#balance.toFixed(2)}${targetCurrency.denomination}`);
  }

  #convertCurrency(newType) {
    const currentValue = CurrencyTypes[this.#currencyType].value;
    const newValue = CurrencyTypes[newType].value;
    this.#balance = (this.#balance * currentValue) / newValue;
  }

  setCurrencyType(aType) {
    if (aType === this.#currencyType) return;
    const oldCurrency = this.#currencyType;
    this.#convertCurrency(aType);
    this.#currencyType = aType;
    printOut(`The account currency has change from ${CurrencyTypes[oldCurrency].name} to ${CurrencyTypes[aType].name}`);
    printOut(`New balance is ${this.#balance.toFixed(2)}${CurrencyTypes[aType].denomination}`);
  }
}

//------------------- Task 1 -------------------

printOut("---------- Task 1 -------------------");
printOut(
  AccountType.Normal + ", " +
  AccountType.Saving + ", " +
  AccountType.Credit + ", " +
  AccountType.Pension
);
printOut(newLine);

//------------------- Task 2 -------------------

printOut("---------- Task 2 -------------------");

const myAccount = new TAccount(AccountType.Normal);
printOut(`myAccount = ${myAccount.toString()}`);
myAccount.setType(AccountType.Saving);
printOut(`myAccount = ${myAccount.toString()}`);
printOut(newLine);

//------------------- Task 3 -------------------

printOut("---------- Task 3 -------------------");

const myAccount2 = new TAccount(AccountType.Normal);
myAccount2.deposit(100);
myAccount2.withdraw(25);
printOut(`My account balance is ${myAccount2.getBalance()}`);
printOut(newLine);

//------------------- Task 4 -------------------

printOut("---------- Task 4 -------------------");

const myAccount3 = new TAccount(AccountType.Normal);
myAccount3.deposit(25);
myAccount3.deposit(75);
myAccount3.setType(AccountType.Saving);
myAccount3.withdraw(30);
myAccount3.withdraw(30);
myAccount3.withdraw(30);
myAccount3.withdraw(10);
myAccount3.setType(AccountType.Pension);
myAccount3.withdraw(10);
myAccount3.setType(AccountType.Saving);
myAccount3.deposit(100);
myAccount3.withdraw(100);
printOut(newLine);

//------------------- Task 5 -------------------

printOut("---------- Task 5 -------------------");

const myAccount5 = new TAccount(AccountType.Normal);
myAccount5.setCurrencyType("NOK");
myAccount5.deposit(150);
printOut(newLine);

//------------------- Task 6 -------------------

printOut("---------- Task 6 -------------------");

const myAccount6 = new TAccount(AccountType.Normal);
myAccount6.deposit(150);
myAccount6.setCurrencyType("SEK");
myAccount6.setCurrencyType("USD");
myAccount6.setCurrencyType("NOK");
printOut(newLine);

//------------------- Task 7 -------------------

printOut("---------- Task 7 -------------------");

const myAccount7 = new TAccount(AccountType.Normal);
myAccount7.deposit(12.00, "USD");
myAccount7.withdraw(10.00, "GBP");
myAccount7.setCurrencyType("CAD");
myAccount7.setCurrencyType("INR");

const balanceINR = parseFloat(myAccount7.getBalance());
myAccount7.withdraw(balanceINR, "SEK");

myAccount7.withdraw(10.00, "USD");
printOut("------Task 8 -------------------------------------------------");