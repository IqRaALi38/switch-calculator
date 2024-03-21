#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const finalanswer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter first number",
    }, {
        type: "number",
        name: "numberTwo",
        message: "Enter second number",
    },
    {
        type: "list",
        name: "operator",
        message: "select one of the operators to perform action",
        choices: ["+", "-", "*", "/"],
    },
]);
const { numberOne, numberTwo, operator } = finalanswer;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log(chalk.red("Invalid operator"));
}
console.log(chalk.yellow(`${numberOne} ${operator} ${numberTwo} = ${result}`));
