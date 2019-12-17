const Datastore = require('nedb');
const contacts = new Datastore({ filename: 'contacts.db'})
contacts.loadDatabase(()=>{
    console.info('contacts db loaded !')
})
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
    const search = new RegExp(name, 'i');
    contacts.find({ $or: [{firstname: search}, {lastname: search}] })
        .exec((err, contact) => {
            console.info(contact);
            console.info(contact.length, 'matches')
        })
}


module.exports = {
    addContact,
    getContact
}

