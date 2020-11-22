import {useState, useEffect} from 'react';
import Card from './Card';
import './Api.css';
import PageClick from './PageClick';
import SearchBar from './SearchBar';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;
  const nyt_api_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=`
  const value = searchValue.length ? `&q=${searchValue}` : '';

  async function fetchData(currentPage, searchValue) {
    setLoading(true); 
    const res = await fetch(`${nyt_api_url}${NYT_API_KEY}&page=${currentPage}${value}`)
    res
      .json()
      .then(res => {
        setArticles(res.response.docs);
        setLoading(false);
      })
  }

  useEffect(() =>{
    fetchData(currentPage);
  }, [searchValue])


  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="CardWrapper">
        {loading ? 'Loading...' : articles.map((currentArticle, i) => {
          return <Card key={i} article={currentArticle} loading={loading} />
        })}
      </div>
      <PageClick currentPage={currentPage} setCurrentPage={setCurrentPage} fetchData={fetchData} />
    </>
  )
}

export default Articles;