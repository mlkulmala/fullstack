import React from 'react'

const PersonForm = ({ persons, newName, newNumber, handleNameChange, handleNumberChange, setPersons }) => {

  const addPerson = (event) => {
    event.preventDefault()
    const same = (element) => element.name === newName
        
    if (persons.some(same)) {
      console.log('nimi on jo listalla')
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personObject))
    }
  }


  return (
    <form onSubmit={addPerson}>
      <div>
         name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
         number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
  
}

export default PersonForm