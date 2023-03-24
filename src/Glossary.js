import {glossary} from './Glossary-terms';
import { useState } from 'react';
import Nav from './Nav';

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
    <div className="mx-auto">
      {/* Nav */}
      <Nav />
      <h1 className="text-2xl font-mono text-blue-800 my-6 text-center">Glossary</h1>
      <p class="m-10 p-5 text-lg leading-7 text-gray-500">By being informed about environmental justice terms, individuals can better understand the root causes and impacts of environmental injustices, as well as the policies and actions necessary to address them.</p>
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
