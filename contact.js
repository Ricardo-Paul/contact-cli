#!/usr/bin/env node

const program = require('commander')
const { addContact, getContact, getContactList } = require('./logic')
const { prompt } = require('inquirer');


const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Enter your firstname'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Enter your lastname'
    }
]

program
    .version('0.0.1')
    .description('Manage your contacts')

program
    .command('addContact')
    .alias('a')
    .description('Add a contact')
    .action( () => {
        prompt(questions)
            .then(answers => 
            addContact(answers));
    })

program
    .command('getContact [name]')
    .alias('r')
    .description('Search a contact')
    .action(name => getContact(name))

program
   .command('getContactList')
   .alias('l')
   .description(' Show all the contacts')
   .action(() => getContactList())
program.parse(process.argv);