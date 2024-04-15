#! /usr/bin/env node

import inquirer from "inquirer";
let Balance = 1300;
let mypin = 6666;

let pinAnswer = await inquirer.prompt([
  { name: "pin", message: "enter your pin", type: "number" },
]);

if (mypin === pinAnswer.pin) {
  console.log("Correct pin code.");

  let Operation_ans = await inquirer.prompt([
    {
      name: "Operation",
      message: "What whould you like to do?",
      type: "list",
      choices: ["Withdraw", "Check balance", "Past Cash", "Deposit"],
    },
  ]);
  if (Operation_ans.Operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter the amount you want to withdraw.",
        type: "number",
      },
    ]);
    if (amountAns.amount > Balance) {
      console.log("You don't have enough balance.");
    } else if (amountAns.amount === Balance) {
      console.log(`Your current balance is 0 `);
      console.log("Thanks for using our atm.");
    } else {
      Balance -= amountAns.amount;
      console.log(`Your current balance is ${Balance} `);
      console.log("Thanks for using our atm.");
    }
    // Balance -= amountAns.amount;
    // console.log(Balance)
    // if ( amountAns.amount > Balance) {
    //   console.log("You don't have enough balance.");
    // } else if(amountAns.amount = Balance ) {
    //   console.log(`Your current balance is 0 `);
    // } else{
    //     console.log(`Your current balance is ${Balance} `);
    // }
  } else if (Operation_ans.Operation === "Check balance") {
    console.log(`Your balance is ${Balance}`);
    console.log("Thanks for using our atm.");
  } else if (Operation_ans.Operation === "Past Cash") {
    let Past_cash_amount = await inquirer.prompt([
      {
        name: "amountAns2",
        message: "Select the amount you wnat to withdraw?",
        type: "list",
        choices: [500, 1000, 1500, 2000],
      },
    ]);
    if (Past_cash_amount.amountAns2 > Balance) {
      console.log("You don't have enough balance.");
    } else if (Past_cash_amount.amountAns2 === Balance) {
      console.log(`Your current balance is 0 `);
      console.log("Thanks for using our atm.");
    } else {
      Balance -= Past_cash_amount.amountAns2;
      console.log(`Your current balance is ${Balance} `);
      console.log("Thanks for using our atm.");
    }
  } else if (Operation_ans.Operation === "Deposit") {
    let Deposit_amount = await inquirer.prompt([
      {
        name: "deposit_amount",
        message: "How much amount do you want to deposite",
        type: "number",
      },
    ]);
    Balance += Deposit_amount.deposit_amount;
    console.log(`Your balance is ${Balance}`);
    console.log("Thanks for using our atm.");
  }
} else {
  console.log("Incorrect pin code.");
}
