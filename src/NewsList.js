import React, { useState } from 'react';
import NewsCard from './NewsCard';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiKey = "656777c1db9d4299bea7cefb9614919a";
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}+${category}&apiKey=${apiKey}`);
    const data = await response.json();
    setArticles(data.articles);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  return (
    <div className="App">
      <h1>EcoJustice Hub</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </label>
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="Air pollution">Air Pollution</option>
            <option value="Water pollution">Water Pollution</option>
            <option value="Soil pollution">Soil Pollution</option>
            <option value="climate%20change">Climate Change</option>
            <option value="land%20use">Land Use</option>
          </select>
        </label>
        <button type="submit">Search</button>
      </form>
      {articles.length > 0 ? (
        <div>
          <div className="flex flex-wrap justify-center">
            {articles.map(article => (
              <NewsCard key={article.url} article={article} />
            ))}
          </div>
        </div>
      ) : (
        <p>No articles found</p>
      )}
    </div>
  );
}

export default App;

