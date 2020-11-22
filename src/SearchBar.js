import React from 'react'
import { debounce } from 'lodash';
import styled from 'styled-components';

const SearchInput = styled.input`
  display: flex;
  position: relative;
  height: 2em;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0 1em;
  font-size: 16px;
  margin: 0.5em 0.25em;
  box-sizing: border-box;

  @media only screen and (max-width: 600px) {
    width: auto;
    height: 3em;
  }

  @media only screen and (min-width: 601px) {
    width: 50%;
  }
`;

const SearchBar = ({searchValue, setSearchValue}) => {
  const updateSearchHandler = debounce((event) => {
    event.persist();
    setSearchValue(event.target.value);
  }, 1000);

  return (
    <>
      <SearchInput onChange={updateSearchHandler} placeholder="Search Articles" />      
    </>
  )
}

export default SearchBar
