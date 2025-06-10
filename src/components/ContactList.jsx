import React from 'react'
import ContactListItem from './ContactListItem'

function ContactList({
  contacts,
  editId,
  editNumber,
  handleEditClick,
  handleDelete,
  handleEditChange,
  handleEditSave,
  handleEditCancel
}) {
  if (!Array.isArray(contacts) || contacts.length === 0) {
    return <ul><li>No hay contactos</li></ul>
  }

  return (
    <ul>
      {contacts.map(contact =>
        <ContactListItem
          key={contact.id}
          contact={contact}
          editId={editId}
          editNumber={editNumber}
          handleEditClick={handleEditClick}
          handleDelete={handleDelete}
          handleEditChange={handleEditChange}
          handleEditSave={handleEditSave}
          handleEditCancel={handleEditCancel}
        />
      )}
    </ul>
  )
}

export default ContactList