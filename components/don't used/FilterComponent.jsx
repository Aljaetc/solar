import { useState } from 'react';

export default function FilterComponent({ manufacturers, technologies, onFilterChange }) {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [powerRange, setPowerRange] = useState([100, 400]);
  const [selectedTechnology, setSelectedTechnology] = useState([]);

  // Handle Manufacturer selection
  const handleManufacturerChange = (e) => {
    setSelectedManufacturer(e.target.value);
    onFilterChange({ manufacturer: e.target.value, powerRange, technology: selectedTechnology });
  };

  // Handle Power Range Change
  const handlePowerRangeChange = (e) => {
    const newRange = [Math.min(e.target.value, powerRange[1]), Math.max(e.target.value, powerRange[0])];
    setPowerRange(newRange);
    onFilterChange({ manufacturer: selectedManufacturer, powerRange: newRange, technology: selectedTechnology });
  };

  // Handle Technology selection
  const handleTechnologyChange = (tech) => {
    const newTechnologies = selectedTechnology.includes(tech)
      ? selectedTechnology.filter(t => t !== tech)
      : [...selectedTechnology, tech];
    setSelectedTechnology(newTechnologies);
    onFilterChange({ manufacturer: selectedManufacturer, powerRange, technology: newTechnologies });
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Products</h3>

      {/* Manufacturer Filter */}
      <div className="mb-4">
        <label htmlFor="manufacturer" className="block text-gray-700 font-medium mb-2">Manufacturer</label>
        <select
          id="manufacturer"
          value={selectedManufacturer}
          onChange={handleManufacturerChange}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select Manufacturer</option>
          {manufacturers.map((manufacturer) => (
            <option key={manufacturer} value={manufacturer}>
              {manufacturer}
            </option>
          ))}
        </select>
      </div>

      {/* Power Range Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Power Range (W)</label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={powerRange[0]}
            min="0"
            max="1000"
            onChange={(e) => handlePowerRangeChange(e, 'min')}
            className="w-20 p-2 border rounded-lg text-center"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            value={powerRange[1]}
            min="0"
            max="1000"
            onChange={(e) => handlePowerRangeChange(e, 'max')}
            className="w-20 p-2 border rounded-lg text-center"
          />
        </div>
      </div>

      {/* Technology Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Technology</label>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <label key={tech} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTechnology.includes(tech)}
                onChange={() => handleTechnologyChange(tech)}
                className="text-blue-600 rounded"
              />
              <span className="text-gray-700">{tech}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          setSelectedManufacturer('');
          setPowerRange([100, 400]);
          setSelectedTechnology([]);
          onFilterChange({ manufacturer: '', powerRange: [100, 400], technology: [] });
        }}
        className="w-full text-center bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300 transition"
      >
        Clear Filters
      </button>
    </div>
  );
}
