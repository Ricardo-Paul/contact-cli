const Datastore = require('nedb');
const contacts = new Datastore({ filename: 'contacts.db'})
contacts.loadDatabase()
var Jack = {
    firstname: 'Jack',
    lastname: 'Dorsey'
}
// convert values to lowerCase
function toLower(value){
   return value.toLowerCase();
}

const addContact = (contact) => {
    contact.firstname.toLowerCase();
    contact.lastname.toLowerCase();
    contacts.insert(contact, function(err, contact){
        console.log(contact.firstname, 'added')
    })
}


// get contact
const getContact = (name) => {
    if(!name){
        console.log('Please provide a name to search')
        return
    }
    const search = new RegExp(name, 'i');
    contacts.find({ $or: [{firstname: search}, {lastname: search}] })
        .exec((err, contact) => {
            console.info(contact);
            console.info('NOT FOUND',contact.length, 'matches')
        })
}


module.exports = {
    addContact,
    getContact
}

