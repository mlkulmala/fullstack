import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonsToShow from './components/PersonsToShow'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040 1231244' },
    { name: 'Mona Kulmala', number: '050 4600478' },
    { name: 'Jaakko Kulmala', number: '040 2213539' },
    {name: 'Armi Kulmala', number: '040 2213540' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNewFilter] = useState('')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const setNewNameAndNumber = () => {
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2> 
      <Filter 
        nameFilter={nameFilter} 
        handleFilterChange={handleFilterChange} 
      />
      
      <h2>Add a new</h2>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        persons={persons}
        setPersons={setPersons}
      />
      {setNewNameAndNumber}
      
      <h2>Numbers</h2>
      <PersonsToShow persons={persons} nameFilter={nameFilter} />
    </div>
  )

}

export default App
