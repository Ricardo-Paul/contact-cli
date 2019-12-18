const { contacts } = require('./logic')

//const Datastore = require('nedb');
//const contacts = new Datastore({filename: 'contacts.db'});


contacts.loadDatabase(()=>{
   console.log('DB Loaded from list.js')
})

const getContactList = () => {
   contacts.find({}).exec((err, contacts) => {
      contacts.forEach(contact =>{
         console.log('firstname:', contact.firstname,' |  ', 'lastname: ', contact.lastname); 
      }
      )
   })
}

getContactList();