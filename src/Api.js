import react, {useState, useEffect} from 'react';
import Card from './Card';

const Articles = () => {
  const [articles, setArticles] = useState({});
  const [hasError, setError] = useState(false);
  const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;

  async function fetchData() {
    const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${NYT_API_KEY}`)
    res
      .json()
      .then(res => {
        setArticles(res.response.docs);
      })
      .catch(err => setError(err));
  }

  useEffect(() =>{
    fetchData();
  }, [])

  return (
    <div>
      {articles.length && articles.map((article) => {
        return <Card article={article} />
      })}
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  )
}

export default Articles;