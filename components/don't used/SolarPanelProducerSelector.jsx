// components/SolarPanelProducerSelector.js
'use client'

import { useState } from 'react';

export default function SolarPanelProducerSelector() {
  // State for managing expansion and selected producer
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProducer, setSelectedProducer] = useState('');

  // List of solar panel producers
  const producers = [
    'JA Solar',
    'Trina Solar',
    'LONGi',
    'TW Solar',
    'Astronergy',
    'Canadian Solar',
    'GCL System Integration',
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left font-medium text-gray-700 text-lg"
      >
        {selectedProducer || 'Select Solar Panel Producer'}
        <span className="float-right">
          {isExpanded ? '▲' : '▼'}
        </span>
      </button>

      {/* Expandable List */}
      {isExpanded && (
        <ul className="mt-2">
          {producers.map((producer) => (
            <li key={producer}>
              <button
                onClick={() => {
                  setSelectedProducer(producer);
                  setIsExpanded(false);
                }}
                className="w-full text-left px-4 py-2 my-1 text-gray-600 bg-gray-50 hover:bg-gray-200 rounded-md transition-all"
              >
                {producer}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
