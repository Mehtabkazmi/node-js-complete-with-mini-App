// npm init create package.json file
// chalk for coloring 
// node_module store dependancy code

const chalk = require('chalk');
const log = console.log;
console.log(chalk.blue.bgRed.underline.inverse("mehtab kazmi"));

log(chalk.blue('hello') + 'world' + chalk.red('!'));
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'mehtab';
console.log(chalk.green('Hello %s'), name);


const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk`
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);