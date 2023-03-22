import React from 'react';

const NewsCard = ({ article }) => {
  const { title, author, publishedAt, description, urlToImage, url } = article;

  return (
    <div className="w-full p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="relative">
          <img src={urlToImage} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        </div>
        <div className="p-4">
          <span className="block text-xl font-semibold mb-2">{title}</span>
          <p className="text-gray-700 text-base">{description}</p>
          <br/>
          <p className="text-gray-500 text-sm mt-2">By {author} on {publishedAt}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:text-blue-800">Read full article</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
