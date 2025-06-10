import React from 'react'

function ContactListItem({
  contact,
  editId,
  editNumber,
  handleEditClick,
  handleDelete,
  handleEditChange,
  handleEditSave,
  handleEditCancel
}) {
  return (
    <li>
      {contact.name}:
      {editId === contact.id ? (
        <>
          <input
            value={editNumber}
            onChange={handleEditChange}
            style={{ marginLeft: '10px' }}
          />
          <button onClick={() => handleEditSave(contact.id, contact.name)} style={{ marginLeft: '5px' }}>
            Guardar
          </button>
          <button onClick={handleEditCancel} style={{ marginLeft: '5px' }}>
            Cancelar
          </button>
        </>
      ) : (
        <>
          {' '}{contact.number}
          <button onClick={() => handleEditClick(contact)} style={{ marginLeft: '10px' }}>
            Editar
          </button>
          <button onClick={() => handleDelete(contact.id)} style={{ marginLeft: '5px' }}>
            Eliminar
          </button>
        </>
      )}
    </li>
  )
}

export default ContactListItem