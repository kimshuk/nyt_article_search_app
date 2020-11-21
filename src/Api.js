import react, {useState, useEffect} from 'react';
import Card from './Card';
import './Api.css';

const Articles = () => {
  const [articles, setArticles] = useState({});
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;

  async function fetchData() {
    setLoading(true);
    const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${NYT_API_KEY}`)
    res
      .json()
      .then(res => {
        setArticles(res.response.docs);
        setLoading(false);
      })
      .catch(err => setError(err));
  }

  useEffect(() =>{
    fetchData();
  }, [])

  return (
    <div className="CardWrapper">
      {articles.length && articles.map((article, i) => {
        return <Card key={i} article={article} />
      })}
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  )
}

export default Articles;