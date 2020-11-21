import React from 'react'

const SearchBar = (searchValue, setSearchValue) => {
  const handleChange = () => {
    console.log(searchValue)
  }

  return (
    <>
      <input value={searchValue} onChange={handleChange} />      
    </>
  )
}

export default SearchBar
