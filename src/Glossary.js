import {glossary} from './Glossary-terms';
import React, { useState } from 'react';

function Glossary() {
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleCardClick = (index) => {
    if (selectedTerm === index) {
      setSelectedTerm(null);
    } else {
      setSelectedTerm(index);
    }
  }

  return (
    <div className="mx-auto p-5">
      <h2 className="text-2xl font-bold mt-8 mb-8 text-center">Glossary</h2>
      <div className="grid grid-cols-3 gap-3 p-3">
        {glossary.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg">
            <div className="px-4 py-2 flex justify-center items-center">
              <h3 className="text-lg text-center font-mono font-bold mb-2">{item.term}</h3>
            </div>
            <div className="px-4 py-2 flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-light py-1 px-2 rounded-full"
                onClick={() => handleCardClick(index)}
              >
                {selectedTerm === index ? "Hide" : "Show"}
              </button>
            </div>
            {selectedTerm === index && (
              <div className="p-4">
                <p className="text-gray-500">{item.definition}</p>
                <p className="text-red-500 mt-2">Example: {item.example}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Glossary;
