import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 0.5em 0.25em;
  padding: 1.2em;
  width: calc(100%/3 - 0.5em);

  @media only screen and (max-width: 600px) {
    width: 50%;
    padding: 1em;
  }

  @media only screen and (min-width: 992px) {
    width: 30%;
  }

`;

const PageClick = ({currentPage, setCurrentPage, fetchData}) => {
  const pageNum = currentPage;

  const clickHandler = () => {
    setCurrentPage(pageNum + 1)
  }

  return (
    <Button onClick={clickHandler}>더 불러오기</Button>
  )
}

export default PageClick;