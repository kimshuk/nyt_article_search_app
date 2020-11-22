import React from 'react'
import { debounce } from 'lodash';
import styled from 'styled-components';

const SearchInput = styled.input`
  display: flex;
  position: relative;
  width: 30%;
  height: 2em;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0 1em;
  font-size: 16px;
  margin: 0.5em 0.25em;
`;

const SearchBar = ({searchValue, setSearchValue}) => {
  // console.log(searchValue, "value");
  const updateSearch = debounce((event) => {
    console.log(event.target.value);
    event.persist();
    setSearchValue(event.target.value);
  }, 1000);

  return (
    <>
      <SearchInput onChange={updateSearch} placeholder="Search Articles" />      
    </>
  )
}

export default SearchBar
