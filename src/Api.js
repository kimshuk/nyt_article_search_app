import {useState, useEffect} from 'react';
import Card from './Card';
import './Api.css';
import PageClick from './PageClick';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const ApiWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;
  const nyt_api_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=`
  const queryValue = searchValue.length ? `&q=${searchValue}` : '';

  async function fetchData() {
    setLoading(true); 
    const res = await fetch(`${nyt_api_url}${NYT_API_KEY}&page=${currentPage}${queryValue}`)
    res
      .json()
      .then(res => {
        setArticles(res.response.docs);
        setLoading(false);
      })
  }

  useEffect(() =>{
    fetchData(currentPage);
  }, [searchValue, currentPage])


  return (
    <ApiWrapper>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="CardWrapper">
        {loading ? 'Loading...' : articles.map((currentArticle, i) => {
          return <Card key={currentArticle._id} article={currentArticle} loading={loading} />
        })}
      </div>
      <PageClick currentPage={currentPage} setCurrentPage={setCurrentPage} fetchData={fetchData} />
    </ApiWrapper>
  )
}

export default Articles;