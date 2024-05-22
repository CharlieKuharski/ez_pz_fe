import React from 'react';
import FilteredDropdown from './components/FilteredDropdown';
import CombinedInput from './components/CombinedInput';
import './App.css';

const App: React.FC = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>React TypeScript Filtered Dropdown</h1>
      </header>
      <FilteredDropdown />
        <div>
        {/* <CombinedInput initialValue="" initialOption="" options={options} /> */}
      </div>
    </div>
    
  );
};

export default App;
