import React, { useState } from 'react';
import NewsCard from './NewsCard';
import { NavLink } from 'react-router-dom';
import TrendingArticles from './TrendingArticles';

function NewsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiKey = '656777c1db9d4299bea7cefb9614919a';
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}+${category}&apiKey=${apiKey}`);
    const data = await response.json();
    setArticles(data.articles);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  return (
    <div>
      <nav className="bg-blue-900 text-white p-6">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 mr-6">
            <span className="font-bold text-2xl font-light font-mono">EcoJustice Hub</span>
            <img src={process.env.PUBLIC_URL + '/env-justice-logo.png'} alt="env-justice-logo" className="h-12 w-12 ml-3"/>
          </div>
          <div className="flex-grow">
            <ul className="flex justify-end">
              <li className="px-4 py-2 text-white rounded-md hover:bg-gray-700">
                <NavLink 
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="glossary">Glossary
                </NavLink>
              </li>
              <li className="px-4 py-2 text-white rounded-md hover:bg-gray-700">
                <NavLink 
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="give">Take Action
                </NavLink>
              </li>
              <li className="px-4 py-2 text-white rounded-md hover:bg-gray-700">
                <NavLink 
                  className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  to="/volunteer">Volunteer
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* top of page */}
      <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Environmental Injustice: An Overview
          </h2>
          <p class="mt-4 text-lg leading-7 text-gray-500">
            Environmental injustice refers to the disproportionate impact of environmental hazards and pollution on marginalized communities. It is a pervasive issue that affects us all, with serious implications for public health, social justice, and the well-being of our planet. Low-income communities and communities of color are particularly vulnerable to environmental injustices, facing higher rates of environmental health problems and exposure to toxic substances. The effects of environmental injustice can range from increased risk of chronic diseases to reduced life expectancy and diminished quality of life. By raising awareness and taking action, we can work towards a more just and sustainable future for all.
          </p>
        </div>

        <div class="max-w-5xl mx-auto mt-12">
          <form onSubmit={handleSubmit} class="flex flex-col sm:flex-row mb-4">
            <div class="mr-4">
              <label for="search" class="sr-only">Search News</label>
              <input 
                type="text" 
                id="search" 
                value={searchTerm} 
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)} 
                class="w-full rounded-md border-gray-300 mt-2 sm:mt-0 sm:ml-2 sm:w-64 py-2 px-4"
              />
            </div>
            <div class="mr-4">
              <label for="category" class="sr-only">Select a category</label>
              <select id="category" value={category} onChange={handleCategoryChange} class="rounded-md border-gray-300 mt-2 sm:mt-0 sm:ml-2 sm:w-64 py-2 px-4">
                <option value="">Select a category</option>
                <option value="Air pollution">Air Pollution</option>
                <option value="Water pollution">Water Pollution</option>
                <option value="Soil pollution">Soil Pollution</option>
                <option value="Climate Change">Climate Change</option>
                <option value="Waste Management">Waste Management</option>
                <option value="Land Use">Land Use</option>
                <option value="Industrial contamination">Industrial contamination</option>
                <option value="Environmental racism">Environmental racism</option>
                <option value="Food justice">Food justice</option>
                <option value="Public health">Public health</option>
              </select>
            </div>
            <div class="flex-shrink-0">
              <button type="submit" class="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-600 mt-2 sm:mt-0">
                Search
              </button>
            </div>
          </form>
          {articles.length > 0 ? (
            <div class="flex flex-wrap justify-center">
              {articles.map(article => (
                <NewsCard key={article.url} article={article} />
              ))}
            </div>
          ) : (
            <div>
              <TrendingArticles />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsList;
