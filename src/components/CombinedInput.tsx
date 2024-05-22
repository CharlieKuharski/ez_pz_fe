import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CombinedInput = ({ initialValue, initialOption, options }) => {
  const [textValue, setTextValue] = useState(initialValue);
  const [selectedOption, setSelectedOption] = useState(initialOption);

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          label="Text"
          value={textValue}
          onChange={handleTextChange}
          variant="outlined"
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={selectedOption}
          onChange={handleSelectChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select' }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CombinedInput;