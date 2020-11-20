import {useState, useEffect} from 'react';


function App() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=NrG3QAZGRGkGhJudKl5KkPNufko6XTuX')
      .then(({ results }) => setResults({ article: results }));
    return () => {
      console.log(results);
    }
  }, [])

  return (
    <div>

    </div>
  );
}

export default App;
