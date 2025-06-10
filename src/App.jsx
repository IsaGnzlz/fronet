import { useEffect, useState } from 'react'
import contactService from './services/contact'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [editId, setEditId] = useState(null)
  const [editNumber, setEditNumber] = useState('')

  useEffect(() => {
    contactService.getAll().then(data => setContacts(data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newName || !newNumber) return

    const newContact = { name: newName, number: newNumber }
    try {
      const addedContact = await contactService.create(newContact)
      setContacts(contacts.concat(addedContact))
      setNewName('')
      setNewNumber('')
    } catch (error) {
      alert('Error al agregar contacto')
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este contacto?')) {
      try {
        await contactService.remove(id)
        setContacts(contacts.filter(contact => contact.id !== id))
      } catch (error) {
        alert('Error al eliminar contacto')
      }
    }
  }

  const handleEditClick = (contact) => {
    setEditId(contact.id)
    setEditNumber(contact.number)
  }

  const handleEditChange = (e) => {
    setEditNumber(e.target.value)
  }

  const handleEditSave = async (id, name) => {
    try {
      const updatedContact = { name, number: editNumber }
      const returnedContact = await contactService.update(id, updatedContact)
      setContacts(contacts.map(c => c.id === id ? returnedContact : c))
      setEditId(null)
      setEditNumber('')
    } catch (error) {
      alert('Error al actualizar contacto')
    }
  }

  const handleEditCancel = () => {
    setEditId(null)
    setEditNumber('')
  }

  return (
    <div>
      <h2>Agregar contacto</h2>
      <ContactForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}
      />

      <h2>Contactos</h2>
      <ContactList
        contacts={contacts}
        editId={editId}
        editNumber={editNumber}
        handleEditClick={handleEditClick}
        handleDelete={handleDelete}
        handleEditChange={handleEditChange}
        handleEditSave={handleEditSave}
        handleEditCancel={handleEditCancel}
      />
    </div>
  )
}

export default App