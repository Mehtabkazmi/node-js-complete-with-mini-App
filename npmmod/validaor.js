const chalk = require("chalk");
const validator = require("validator");

const res = validator.isEmail('mehtab@gmail.com');
console.log(res ? chalk.green(res) : chalk.red(res));
