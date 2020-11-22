import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 0.5em 0.25em;
`;

const PageClick = ({currentPage, setCurrentPage, fetchData}) => {
  const pageNum = currentPage;

  const clickHandler = () => {
    setCurrentPage(pageNum + 1)
    fetchData(pageNum + 1)
  }

  return (
    <Button onClick={clickHandler}>더 불러오기</Button>
  )
}

export default PageClick;