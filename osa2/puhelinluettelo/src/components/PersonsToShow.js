import React from 'react'

const Person = ({ person }) => {
  return (
      <div>
        <p>{person.name} {person.number}</p>
      </div>
    )
}

const PersonsToShow = ({ persons, nameFilter }) => {

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().match(nameFilter.toLowerCase()))

  return (
    <div>
      {personsToShow.map(person =>
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}

export default PersonsToShow