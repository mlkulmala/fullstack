import React from 'react'

const Filter = ({ nameFilter, handleFilterChange }) => {
    return (
        <input value={nameFilter} onChange={handleFilterChange} />

    )
}

export default Filter