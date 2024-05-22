import React, { useState, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
];

const FilteredDropdown: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.label.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <select>
        {filteredOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilteredDropdown;
