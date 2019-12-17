const program = require('commander');
const { addContact, getContact } = require('./logic');

program
    .version('0.0.1')
    .description('Manage your contacts')

program
    .command('addContact <firstname> <lastname>')
    .alias('a')
    .description('Add a contact')
    .action((firstname, lastname) => {
        addContact({firstname, lastname});
    })


program
    .command('getContact <name>')
    .alias('r')
    .description('Search a contact')
    .action(name => getContact(name))

program.parse(process.argv);