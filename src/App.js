import React, { useState } from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [contactToBeEdited, setContactToBeEdited] = useState(null)

  // ... Your functions ...
    const addContact = (contact) => {
      setContacts([...contacts, contact])
    }
      const deleteContact = (id) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== id)
        setContacts(updatedContacts)
      }
  const editContact = (contact) => {
    setContactToBeEdited({ ...contact })
  }
   const updateContact = (updatedContact) => {
     const updatedContacts = contacts.map((contact) =>
       contact.id === updatedContact.id
         ? { ...contact, ...updatedContact }
         : contact
     )
     setContacts(updatedContacts)
     setContactToBeEdited(null)
   }

  return (
    <div className='app-container'>
      <h1>Contact Management</h1>
      <ContactForm
        addContact={addContact}
        updateContact={updateContact}
        contactToBeEdited={contactToBeEdited}
        setContactToBeEdited={setContactToBeEdited}
      />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
    </div>
  )
}

export default App
