import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function TrendingArticles() {
  const [trendingArticles, setTrendingArticles] = useState([]);

  useEffect(() => {
    const apiKey = '656777c1db9d4299bea7cefb9614919a';
    const fetchTrendingArticles = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=environmental+justice&sortBy=popularity&apiKey=${apiKey}`);
      const data = await response.json();
      setTrendingArticles(data.articles);
    };
    fetchTrendingArticles();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mt-20">What's New?</h2>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {trendingArticles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default TrendingArticles;
