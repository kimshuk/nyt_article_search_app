import react, {useState, useEffect} from 'react';
import Card from './Card';
import './Api.css';
import PageClick from './PageClick';
import SearchBar from './SearchBar';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState();
  const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;
  const nyt_api_url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=`

  async function fetchData(currentPage) {
    setLoading(true);
    const res = await fetch(`${nyt_api_url}${NYT_API_KEY}&page=${currentPage}`)
    res
      .json()
      .then(res => {
        console.log(res.response.docs);
        setArticles(res.response.docs);
        setLoading(false);
      })
  }

  useEffect(() =>{
    fetchData(currentPage);
  }, [])


  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="CardWrapper">
        {articles.length && articles.map((currentArticle, i) => {
          return <Card key={i} article={currentArticle} loading={loading} />
        })}
      </div>
      <PageClick currentPage={currentPage} setCurrentPage={setCurrentPage} fetchData={fetchData} />
    </>
  )
}

export default Articles;