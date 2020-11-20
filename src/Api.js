import react, {useState, useEffect} from 'react';

const Articles = () => {
  const [articles, setArticles] = useState({});
  const [hasError, setError] = useState(false);
  const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;

  async function fetchData() {
    const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${NYT_API_KEY}`)
    res
      .json()
      .then(res => {
        setArticles(res)
        console.log(res);
      })
      .catch(err => setError(err));
  }

  useEffect(() =>{
    fetchData();
  }, [])

  return (
    <div>
      <span>{JSON.stringify(articles)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  )
}

export default Articles;