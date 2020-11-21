import React from 'react';

const PageClick = ({currentPage, setCurrentPage, fetchData}) => {
  const pageNum = currentPage;

  const clickHandler = () => {
    setCurrentPage(pageNum + 1)
    fetchData(pageNum + 1)
  }

  return (
    <button onClick={clickHandler}>불러오기</button>
  )
}

export default PageClick;