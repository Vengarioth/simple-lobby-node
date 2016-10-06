var inquirer = require('inquirer');

var questions = [{
    type: 'input',
    name: 'password',
    message: 'Please enter a password to use this service (you will need this later on the client side).'
},{
    type: 'list',
    name: 'persistence',
    message: 'Which kind of persistence should the service use?',
    choices: ['in-memory', 'redis']
}];

inquirer.prompt(questions).then((answers) => {

    // TODO create config file.

    console.log('Service set up! run `npm run start` to run it!');
});
