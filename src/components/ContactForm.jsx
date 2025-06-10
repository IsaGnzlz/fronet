import React from 'react'

function ContactForm({ newName, setNewName, newNumber, setNewNumber, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Nombre: <input value={newName} onChange={e => setNewName(e.target.value)} />
      </div>
      <div>
        Número: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
      </div>
      <button type="submit">Agregar</button>
    </form>
  )
}

export default ContactForm