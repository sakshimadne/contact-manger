import React from 'react'
import './ContactList.css'

const ContactList = ({ contacts, deleteContact, editContact }) => (
  <div className='contact-list'>
    {contacts.map((contact) => (
      <div key={contact.id} className='contact-item'>
        <h2>
          {contact.firstName} {contact.middleName} {contact.lastName}
        </h2>
        <p>{contact.phoneNumber}</p>
        <button onClick={() => editContact(contact)} className='edit-button'>
          Edit
        </button>
        <button
          onClick={() => deleteContact(contact.id)}
          className='delete-button'
        >
          Delete
        </button>
      </div>
    ))}
  </div>
)

export default ContactList
